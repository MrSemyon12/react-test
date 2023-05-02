import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => console.log(response.data));

  //   const user = { id: 1, name: "John", age: 12 };
  //   axios
  //     .post("/api/user", user)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  //   const config = {
  //     method: "post",
  //     url: "/api/user",
  //     data: user,
  //   };
  //   axios(config);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setError(false);
    getData();
  }, []);

  return <>{error ? "ОЙ!" : isLoading ? "Loading..." : JSON.stringify(data)}</>;
}
