import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import NewUser from "../components/NewUser";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>The Welcome page!</h1>
      <button onClick={() => navigate("/welcome/new-user")}>Redirect</button>

      <Routes>
        <Route path='new-user' element={<NewUser />} />
      </Routes>
    </section>
  );
};

export default Welcome;
