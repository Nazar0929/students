// export const poststuAPI = (student) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(student),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };

//   return fetch("http://localhost:3000/students", options)
//     .then((res) => res.json());
// };


export async function poststuAPI(student) {
  try {
    const res = await fetch("http://localhost:3000/students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  } catch (err) {
    console.log("Не удалось добавить студента", err);
    throw err;
  }
}