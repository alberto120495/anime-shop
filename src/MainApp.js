import React, { useState } from "react";
import AppRouter from "./routers/AppRouter";
import { UserContext } from "./UserContext";
function MainApp() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default MainApp;
