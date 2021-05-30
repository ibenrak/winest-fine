import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function LoginPage() {
  const [userData, setUser] = useState(null);

  //   useEffect(() => {
  //     sanityClient
  //       .fetch(
  //         `*[_type='user']{
  //           mail,
  //           password
  //       }`
  //       )
  //       .then((data) => setUser(data))
  //       .catch(console.error);

  //     console.log(userData);
  //   }, []);

  const createUser = () => {
    console.log("creating user");
    const mutations = [
      {
        create: {
          _type: "user",
          mail: "ibenhaugen@gmail.com",
          password: "boop",
        },
      },
    ];

    var projectId = "76vgjv0n";
    var tokenWithWriteAccess =
      "skIcilePBWu9WF7QsjuwxdfVUrOhul3mJScwWmirPCJoeu4aiHJvRaKGsrlFZdr2L92TSrACWvgVgSoWA";

    fetch(
      `https://${projectId}.api.sanity.io/v2021-03-25/data/mutate/production`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  //   console.log(userData);
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={createUser}>Create user</button>
    </div>
  );
}
