async function t(){try{let t=await fetch("http://localhost:3000/students");return await t.json()}catch(t){throw console.log("Не удалось получить список студентов",t),t}}async function e(t){try{let e=await fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}});return await e.json()}catch(t){throw console.log("Не удалось добавить студента",t),t}}async function n(t){try{let e=await fetch("http://localhost:3000/students/"+t,{method:"DELETE"});return await e.json()}catch(t){throw console.log("Не удалось удалить студента",t),t}}async function a(t,e){try{let n=await fetch("http://localhost:3000/students/"+t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}});return await n.json()}catch(t){throw console.log("Не удалось обновить студента",t),t}}let l=document.getElementById("get-students-btn"),o=document.querySelector("#students-table tbody"),s=document.getElementById("add-student-form"),r=null;function c(t){o.innerHTML=t.map(({id:t,name:e,age:n,course:a,skills:l,email:o,isEnrolled:s})=>`
      <tr id="${t}">
      <td>${t}</td>
      <td>${e}</td>
      <td>${n}</td>
      <td>${a}</td>
      <td>${l.join(", ")}</td>
      <td>${o}</td>
      <td>${s?"Так":"Ні"}</td>
      <td>
      <button data-action="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
      <button data-action="edit">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
      </td>
      </tr>
      `).join("")}document.addEventListener("DOMContentLoaded",async()=>{try{let e=await t();c(e)}catch(t){console.log("Не удалось загрузить студентов",t)}}),l.addEventListener("click",async()=>{try{let e=await t();c(e)}catch(t){console.log("Не удалось загрузить студентов",t)}}),s.addEventListener("submit",async n=>{n.preventDefault();let l=n.currentTarget.elements,o={name:l.name.value.trim(),age:Number(l.age.value),course:l.course.value.trim(),skills:l.skills.value.split(",").map(t=>t.trim()),email:l.email.value.trim(),isEnrolled:l.isEnrolled.checked};try{r?(await a(r,o),r=null):await e(o),s.reset();let n=await t();c(n)}catch(t){console.log("Не удалось сохранить студента",t)}}),o.addEventListener("click",async e=>{let a=e.target.dataset.action;if(!a)return;let l=e.target.closest("tr"),o=Number(l.id);try{if("delete"===a){await n(o);let e=await t();c(e)}if("edit"===a){r=o;let t=l.children;s.elements.name.value=t[1].textContent,s.elements.age.value=t[2].textContent,s.elements.course.value=t[3].textContent,s.elements.skills.value=t[4].textContent,s.elements.email.value=t[5].textContent,s.elements.isEnrolled.checked="Так"===t[6].textContent}}catch(t){console.log("Сталася помилка при обробці дії",t)}});
//# sourceMappingURL=Students.b2ee0936.js.map
