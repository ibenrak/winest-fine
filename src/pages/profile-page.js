import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function ProfilePage() {
  const [profileData, setProfile] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type='profile']{
          image{
              asset->{
                  _id,
                  url
              },
              alt
          },
          name,
          status
      }`
      )
      .then((data) => setProfile(data))
      .catch(console.error);

    console.log(profileData);
  }, []);

  console.log(profileData);
  return <h1>Profile page</h1>;
}
