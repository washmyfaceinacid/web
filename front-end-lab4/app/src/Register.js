import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendRequest } from "./SendRequest.js";
import { useNavigate } from "react-router-dom";
import "./html_css/styles/style_login.css";

export default function Register() {
  const [userReg, setUserReg] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (reg) => {
    reg.preventDefault();
    const requestURL = "http://localhost:5000/user";
    if (
      userReg.password === userReg.confirmPassord &&
      userReg.confirmPassord != undefined
    ) {
      sendRequest("POST", requestURL, null, null, userReg)
        .then((data) => {
          window.localStorage.setItem("userData", JSON.stringify(data));
          alert('Successful registration.');
          navigate("/service");
        })
        .catch((err) => {
          alert(err['error']);
        });
    }
    else {
      alert('Error. Passwords are not similar.');
    }
  };

  return (
    <form className="log">
      <div className="login">
        <h1 className="margin-150">Registration</h1>
      </div>
      <div className="box-log">
        <input
          type="user"
          name=""
          placeholder="Username"
          required
          onChange={(e) =>
            setUserReg((prev) => ({ ...prev, username: e.target.value }))
          }
        ></input>
        <input
          type="password"
          name=""
          placeholder="Password"
          required
          onChange={(e) =>
            setUserReg((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <input
          type="password"
          name=""
          placeholder="Confirm password"
          required
          onChange={(e) =>
            setUserReg((prev) => ({ ...prev, confirmPassord: e.target.value }))
          }
        ></input>
        <input
          type="submit"
          name=""
          value="Submit"
          onClick={handleSubmit}
        ></input>
        <Link to="/login">Log in</Link>
      </div>
    </form>
  );
}
