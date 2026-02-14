let t=()=>fetch("http://localhost:3000/students").then(t=>t.json()),e=document.getElementById("get-students-btn"),n=document.querySelector("#students-table tbody"),l=document.getElementById("add-student-form"),d=null;function s(t){n.innerHTML=t.map(({id:t,name:e,age:n,course:l,skills:d,email:s,isEnrolled:a})=>`
        <tr id="${t}">
          <td>${t}</td>
          <td>${e}</td>
          <td>${n}</td>
          <td>${l}</td>
          <td>${d.join(", ")}</td>
          <td>${s}</td>
          <td>${a?"Так":"Ні"}</td>
          <td>
            <button data-action="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            <button data-action="edit">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
          </td>
        </tr>
      `).join("")}document.addEventListener("DOMContentLoaded",()=>{t().then(t=>s(t))}),e.addEventListener("click",()=>{t().then(t=>s(t))}),l.addEventListener("submit",e=>{e.preventDefault();let n=e.currentTarget.elements,a={name:n.name.value.trim(),age:Number(n.age.value),course:n.course.value.trim(),skills:n.skills.value.split(",").map(t=>t.trim()),email:n.email.value.trim(),isEnrolled:n.isEnrolled.checked};if(d){var o;(o=d,fetch(`http://localhost:3000/students/${o}`,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json())).then(()=>(d=null,l.reset(),t())).then(t=>s(t))}else fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(()=>(l.reset(),t())).then(t=>s(t))}),n.addEventListener("click",e=>{let n=e.target.dataset.action;if(!n)return;let a=e.target.closest("tr"),o=Number(a.id);if("delete"===n&&fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(t=>t.json()).then(()=>t()).then(t=>s(t)),"edit"===n){d=Number(a.id);let t=a.children;l.elements.name.value=t[1].textContent,l.elements.age.value=t[2].textContent,l.elements.course.value=t[3].textContent,l.elements.skills.value=t[4].textContent,l.elements.email.value=t[5].textContent,l.elements.isEnrolled.checked="Так"===t[6].textContent}});
//# sourceMappingURL=Students.d54589be.js.map
