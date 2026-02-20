// export const delstuAPI = (id) => {
//   return fetch(`http://localhost:3000/students/${id}`, {
//     method: "DELETE",
//   }).then((res) => res.json());
// };


export async function delstuAPI(id) {
  try {
    const res = await fetch("http://localhost:3000/students/" + id, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    console.log("Не удалось удалить студента", err);
    throw err;
  }
}