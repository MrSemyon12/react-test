async function getUsers(names) {
  return Promise.all(
    names.map(async (name) => {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const user = await response.json();
      return "message" in Object.keys(user) ? null : user;
    })
  );
}

names = ["MrSemyon12", "KuznecovMihail", "PatayD", "alicekaeva", "USERNAME"];

getUsers(names).then((e) => console.log(e));
