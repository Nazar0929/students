let t=()=>fetch("http://localhost:3000/students").then(t=>t.json()),e=document.getElementById("get-students-btn"),n=document.querySelector("#students-table tbody"),l=document.getElementById("add-student-form"),s=null;function d(t){n.innerHTML=t.map(({id:t,name:e,age:n,course:l,skills:s,email:d,isEnrolled:a})=>`
        <tr id="${t}">
          <td>${t}</td>
          <td>${e}</td>
          <td>${n}</td>
          <td>${l}</td>
          <td>${s.join(", ")}</td>
          <td>${d}</td>
          <td>${a?"Так":"Ні"}</td>
          <td>
            <button data-action="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            <button data-action="edit">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
          </td>
        </tr>
      `).join("")}e.addEventListener("click",()=>{t().then(t=>d(t))}),l.addEventListener("submit",e=>{e.preventDefault();let n=e.currentTarget.elements,a={name:n.name.value.trim(),age:Number(n.age.value),course:n.course.value.trim(),skills:n.skills.value.split(",").map(t=>t.trim()),email:n.email.value.trim(),isEnrolled:n.isEnrolled.checked};if(s){var o;(o=s,fetch(`http://localhost:3000/students/${o}`,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json())).then(()=>(s=null,l.reset(),t())).then(t=>d(t))}else fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(()=>(l.reset(),t())).then(t=>d(t))}),n.addEventListener("click",e=>{let n=e.target.dataset.action;if(!n)return;let a=e.target.closest("tr"),o=Number(a.id);if("delete"===n&&fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(t=>t.json()).then(()=>t()).then(t=>d(t)),"edit"===n){s=Number(a.id);let t=a.children;l.elements.name.value=t[1].textContent,l.elements.age.value=t[2].textContent,l.elements.course.value=t[3].textContent,l.elements.skills.value=t[4].textContent,l.elements.email.value=t[5].textContent,l.elements.isEnrolled.checked="Так"===t[6].textContent}});
//# sourceMappingURL=Students.9c3c87fd.js.map
