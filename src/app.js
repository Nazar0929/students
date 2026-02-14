import { getstuAPI } from "./api/getstuAPI.js";
import { poststuAPI } from "./api/poststuAPI.js";
import { delstuAPI } from "./api/delstuAPI.js";
import { updatestuAPI } from "./api/updatestuAPI.js";

const getBtn = document.getElementById("get-students-btn");
const tableBody = document.querySelector("#students-table tbody");
const form = document.getElementById("add-student-form");

let currentEdit = null;



function renderStudents(array) {
  const markup = array.map(({ id, name, age, course, skills, email, isEnrolled }) => {
      return `
        <tr id="${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${age}</td>
          <td>${course}</td>
          <td>${skills.join(", ")}</td>
          <td>${email}</td>
          <td>${isEnrolled ? "Так" : "Ні"}</td>
          <td>
            <button data-action="delete">Видалити</button>
            <button data-action="edit">Оновити</button>
          </td>
        </tr>
      `;
    })
    .join("");
  tableBody.innerHTML = markup;
}




getBtn.addEventListener("click", () => {
  getstuAPI().then((res) => renderStudents(res));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const studentData = {
    name: elements.name.value.trim(),
    age: Number(elements.age.value),
    course: elements.course.value.trim(),
    skills: elements.skills.value.split(",").map((s) => s.trim()),
    email: elements.email.value.trim(),
    isEnrolled: elements.isEnrolled.checked,
  };

  if (currentEdit) {
    updatestuAPI(currentEdit, studentData)
      .then(() => {
        currentEdit = null;
        form.reset();
        return getstuAPI();
      })
      .then((res) => renderStudents(res));
  } else {

    poststuAPI(studentData)
      .then(() => {
        form.reset();
        return getstuAPI();
      })
      .then((res) => renderStudents(res));
  }
});





tableBody.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (!action) return;


  const row = event.target.closest("tr");
  const id = Number(row.id);      

  if (action === "delete") {
    delstuAPI(id)
      .then(() => getstuAPI())
      .then((res) => renderStudents(res));
  }

  if (action === "edit") {
    currentEdit = Number(row.id);  

    const cells = row.children;

    form.elements.name.value = cells[1].textContent;
    form.elements.age.value = cells[2].textContent;
    form.elements.course.value = cells[3].textContent;
    form.elements.skills.value = cells[4].textContent;
    form.elements.email.value = cells[5].textContent;
    form.elements.isEnrolled.checked =
      cells[6].textContent === "Так";
  }

});
