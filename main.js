//Async await
// Syntactic sugar that comes with ES8

// //Regular promise
// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(500, "Right"))
//   .then(() => movePlayer(600, "Left"));

// //Async one

// async function playerStart() {
//   const firstMove = await movePlayer(100, "Left"); //pause
//   await movePlayer(400, "Left"); //pause
//   await movePlayer(500, "Right"); //pause
//   await movePlayer(600, "Left"); //pause
// }

//Regular promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then(resp => resp.json())
  .then(console.log);

//Async
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts"
];

//Second example with the real life application
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};

getData();
