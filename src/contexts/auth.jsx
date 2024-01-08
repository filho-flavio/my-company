import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // using effect to add the user in the state
  useEffect(() => {
    // Get the user's info if it exists in local storage. If not, set the
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");

    if (userToken && usersStorage) {
      const users = JSON.parse(usersStorage);

      const hasUser = users?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      // if a matching user is found, set it as the current user in the components state
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorageString = localStorage.getItem("users_db");

    const usersStorage = usersStorageString
      ? JSON.parse(usersStorageString)
      : null;

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));

        // set the user int the components state
        setUser({ email, password });
        return;
      } else {
        return "E-mail or password incorrect";
      }
    } else {
      return "User not registered";
    }
  };

  const signup = (email, password) => {
    const usersStorageString = localStorage.getItem("users_db");

    const usersStorage = usersStorageString
      ? JSON.parse(usersStorageString)
      : null;

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "There is an acount with this e-mail.";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_db", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
