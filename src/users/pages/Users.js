import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Hellekin",
      image:
        "https://static.wikia.nocookie.net/yugiohenespanol/images/d/d0/Foto_saggi_el_payaso_oscuro.jpg/revision/latest?cb=20120202061441&path-prefix=es",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
