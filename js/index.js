async function getUserName(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).catch((e) => console.log(e.message));
  const json = await response.json();
  return json.name;
}

async function getPostBodyAndUserName(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).catch((e) => console.log(e.message));

  const json = await response.json();
  const username = await getUserName(json.userId);
  console.log(`${json.body}\n\n${username}`);
}

getPostBodyAndUserName(10);
