import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../App.css"

//import { useEffect, useState } from "react";

const Home = () => {
  // const [visitedBefore, setVisitedBefore] = useState(false);

  // useEffect(() => {
  //   const hasVisitedBefore = localStorage.getItem("visitedBefore");
  //   if (hasVisitedBefore) {
  //     setVisitedBefore(true);
  //   } else {
  //     localStorage.setItem("visitedBefore", "true");
  //   }
  // }, []);
  return (
    <>
      <div className="frontPage container-fluid">
        <div className="row">
          {/*left column  */}

          <div
            className=" col-md-6 d-flex "
            style={{ height: "100vh", background: "cover" }}
          >
            <div
              className="my-5"
              style={{
                "padding-right": "65px",
                "padding-left": "65px",
                color: "Black",
              }}
            >
              <p
                style={{
                  color: "#720455",
                  textAlign: "center",
                  "font-size": "45px",
                }}
              >
                <b>
                  Welcome To <span>ExamEase</span>
                </b>
              </p>
              <p
                style={{
                  textAlign: "center",
                  "font-size": "20px",
                  color: "#720455",
                }}
              >
                Get your doubts cleared through discussions, previous year
                questions (PYQ), and access to comprehensive notes.
              </p>
              <div className="my-3">
                <p
                  style={{
                    textAlign: "center",
                    color: "#720455",
                    "font-size": "25px",
                  }}
                >
                  <b>
                    Embark on your academic journey with confidence as you
                    access our valuable resources. Let's elevate your learning
                    experience together!
                  </b>
                </p>
              </div>
            </div>
          </div>

          {/*left column  */}

          <div
            className="col-md-6 d-flex  justify-content-center  "
            style={{ height: "100vh", background: "cover" }}
          >
            <div
              className="rightInner my-5"
              style={{
                "padding-right": "35px",
                "padding-left": "35px",
                color: "white",
              }}
            >
              <p
                className="my-3"
                style={{
                  textAlign: "center",

                  "font-size": "35px",
                }}
              >
                <u>Select Your Year--</u>
              </p>

              <div className="MyRightBox my-4">
                <div className="work1 mx-4 my-4">
                  <div
                    className="  text-white font-weight-bold"
                    style={{ fontSize: "1.5em" }}
                  >
                    <div className="layer">
                      <Link
                        to="/branches/1"
                        className="year-link text-center"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="year-card my-3.5"
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-graduation-cap"></i>
                          <span>1st Year</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="work2 mx-4 my-4">
                  <div
                    className=" text-white font-weight-bold"
                    style={{ fontSize: "1.5em" }}
                  >
                    <div className="layer">
                      <Link
                        to="/branches/2"
                        className="year-link text-center"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="year-card my-3.5"
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-graduation-cap"></i>
                          <span>2nd Year</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="work3 mx-4 my-4">
                  <div
                    className=" text-white font-weight-bold"
                    style={{ fontSize: "1.5em" }}
                  >
                    <div className="layer">
                      <Link
                        to="/branches/3"
                        className="year-link text-center"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="year-card my-3.5"
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-graduation-cap"></i>
                          <span>3rd Year</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="work4 mx-4 my-4">
                  <div
                    className="  text-white font-weight-bold"
                    style={{ fontSize: "1.5em" }}
                  >
                    <div className="layer">
                      <Link
                        to="/branches/4"
                        className="year-link text-center"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="year-card my-3.5"
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-graduation-cap"></i>
                          <span>4th Year</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
