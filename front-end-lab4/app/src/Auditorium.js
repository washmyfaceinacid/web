import React, { useState, useEffect } from "react";
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

  const [reservationEx, setReservationEx] = useState({});
  
  useEffect(() => {
  const requestURL = `http://localhost:5000/reservation/${auditorium.number}`
  sendRequest("GET", requestURL)
      .then((data) => {
        setReservationEx(data);
      })
      .catch((err) => {
        setReservationEx({
          idReservation: -1,
          idAudience: -1,
          idUser: -1,
          idStatus: -1,
          amountOfHours: -1,
          dateTimeOfReservation: -1,
          dateTimeOfEndReservation: -1,
        });
      });
  }, []);


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

  const changeReservation = (chRes) => {
    chRes.preventDefault();
    const requestURL = `http://localhost:5000/reservation/${reservationEx.idReservation}`;
    sendRequest("PUT", requestURL, user.username, user.password, reservation)
      .then((data) => {
        alert('Reservation data changed successfully.');
        setReservationEx(data);
      })
      .catch((err) => {
        alert(err['error']);
      });
  };

  const reservate = (res) => {
    res.preventDefault();
    const requestURL = "http://localhost:5000/reservation";
    sendRequest("POST", requestURL, user.username, user.password, reservation)
      .then((data) => {
        alert('Reservation created successfully.');
        setReservationEx(data);
      })
      .catch((err) => {
        alert(err['error']);
      });
  };

  const deleteReservation = (delRes) => {
    delRes.preventDefault();
    const requestURL = `http://localhost:5000/reservation/${reservationEx.idReservation}`;
    sendRequest("DELETE", requestURL, user.username, user.password)
      .then((data) => {
        alert('Reservation deleted successfully.');
        setReservationEx({
          idReservation: -1,
          idAudience: -1,
          idUser: -1,
          idStatus: -1,
          amountOfHours: -1,
          dateTimeOfReservation: -1,
          dateTimeOfEndReservation: -1,
        });
      })
      .catch((err) => {
        alert(err['error']);
      });
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
              {(reservationEx.idUser === reservation.idUser) && 
              (<div className="btns">
                  <button className="btn" onClick={changeReservation}>
                  Change &raquo;
                  </button>
                  <button className="btn margin-top-5" onClick={deleteReservation}>
                  Cancel Reservation &raquo;
                  </button>
              </div>)}
              {(reservationEx.idUser !== reservation.idUser) && 
              (<button className="btn" onClick={reservate}>
                Choose &raquo;
              </button>)}

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
