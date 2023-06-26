import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendRequest } from "./SendRequest.js";
import { useNavigate } from "react-router-dom";
import "./html_css/styles/style_login.css";

export default function Login() {
  const [userLog, setUserLog] = useState(
    JSON.parse(window.localStorage.getItem("userData")) || ""
  );
  let navigate = useNavigate();
  const handleSubmit = (reg) => {
    reg.preventDefault();
    const requestURL = "http://localhost:5000/login";
    sendRequest("POST", requestURL, null, null, userLog)
      .then((data) => {
        window.localStorage.setItem("userData", JSON.stringify(data));
        navigate("/service");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="log">
      <div className="login">
        <h1 className="margin-150">Login</h1>
      </div>
      <form className="box-log">
        <input
          type="text"
          name="Username"
          placeholder="Username"
          required
          onChange={(e) =>
            setUserLog((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required
          onChange={(e) =>
            setUserLog((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input
          type="submit"
          name="Submit"
          value="Submit"
          onClick={handleSubmit}
        />
        <Link to="/register">Sign up</Link>
      </form>
    </div>
  );
}
