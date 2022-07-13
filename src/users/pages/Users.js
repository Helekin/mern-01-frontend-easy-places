import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Hellekin",
      image:
        "https://uploads4.yugioh.com/card_images/286/detail/Saggi-the-Dark-Clown.jpg?1375128247",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
