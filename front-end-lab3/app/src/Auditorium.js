import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { sendRequest } from "./SendRequest.js";
import { useNavigate } from "react-router-dom";
import "./html_css/styles/layout.css";

export default function Auditorium() {
  const params = useParams();
  const auditoriums = Object.values(
    JSON.parse(window.localStorage.getItem("auditoriumData"))
  );
  const [auditorium, setAuditorium] = useState(
    auditoriums.find((x) => x.idAudience == params.id)
  );

  let navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  if (!user) {
    navigate("/login");
  }
  const [reservation, setReservation] = useState({
    idAudience: params.id,
    idUser: user.idUser,
    idStatus: 1,
    amountOfHours: 1,
    dateTimeOfReservation: Math.floor(Date.now() / 1000),
    dateTimeOfEndReservation: Math.floor(Date.now() / 1000) + 3600,
  });

  const reservate = (res) => {
    res.preventDefault();
    const requestURL = "http://localhost:5000/reservation";
    sendRequest("POST", requestURL, user.username, user.password, reservation)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper-top">
      <div className="hoc container clear ">
        <div>
          <div className="one_half-aud first">
            <h6 className="heading">
              There all information about auditorium №{auditorium.number}
            </h6>
            <p>Opened in 1988. Polytechnic University.</p>
            <p className="btmspace-30">Nothing special</p>
            <div>
              <p className="btmspace-5">Reserve on hours:</p>
              <p className="btmspace-15">
                <input
                  type="range"
                  min="1"
                  max="120"
                  defaultValue="1"
                  onChange={(e) =>
                    setReservation((prev) => ({
                      ...prev,
                      amountOfHours: e.target.value,
                      dateTimeOfReservation: Math.floor(Date.now() / 1000),
                      dateTimeOfEndReservation:
                        Math.floor(Date.now() / 1000) + e.target.value * 3600,
                    }))
                  }
                  list="rangeList"
                />{" "}
                <span id="rangeValue">{reservation.amountOfHours}</span>
              </p>
              <button className="btn" onClick={reservate}>
                Choose &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="img"
        src="https://s.pfst.net/2015.08/822545665672298f66b34724d267c0f3bf2b68adbbc5_b.jpg"
        alt="Audience"
        width="300"
        height="200"
      />
    </div>
  );
}
