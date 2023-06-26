import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sendRequest } from "./SendRequest";
import "./html_css/styles/layout.css";

export default function Service() {
  const [aud, setAud] = useState(undefined);
  useEffect(() => {
    const requestURL = "http://localhost:5000/audience";
    sendRequest("GET", requestURL)
      .then((data) => {
        window.localStorage.setItem("auditoriumData", JSON.stringify(data));
        setAud(Object.values(data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="wrapper-top">
      <div>
        <div className="header container-aud margin-50">
          {!!aud && <h1 className="margin-70">Choose your auditorium</h1>}
          {!!!aud && <h1 className="margin-70">Loading...</h1>}
        </div>
        {!!aud && (
          <div id="scrolling-aud">
            <ul className="columns-2">
              {aud?.map((auditoriums) => {
                return (
                  <li className="one_half" key={auditoriums.idAudience}>
                    <article>
                      <h6 className="heading-aud font-x1">
                        <Link to={"/auditorium/" + auditoriums.idAudience}>
                          Auditorium №{auditoriums.number}
                        </Link>
                      </h6>
                      <p className="btmspace-80">
                        Select for some time you need [&hellip;]
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
