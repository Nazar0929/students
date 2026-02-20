// export const getstuAPI = () => {
//   return fetch("http://localhost:3000/students")
//     .then((res) => res.json());
// };


export async function getstuAPI() {
  try {
    const res = await fetch("http://localhost:3000/students");
    return await res.json();
  } catch (err) {
    console.log("Не удалось получить список студентов", err);
    throw err;
  }
}