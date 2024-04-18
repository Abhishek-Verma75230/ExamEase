import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./Utils";
// import background from "../photos/loginback.jpg"
import background from "../photos/loginnew.png"
import "./login.css"




const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:800/api/login",
        loginData
      );
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      setError("");
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div
      className="loginmain"
      style={{ padding: "auto", height: "100vh", width: "100vw" }}
    >
      <div className="container" style={{ }}>
        <div className="row">
          <div className="col-sm-6 login" style={{ margin: "auto" }}>
            <div style={{ textAlign: "center" }}>
              <h1>Welcome to login</h1>
              <img className="loginimage" src={background} alt=""></img>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                consequuntur, quia iusto quibusdam recusandae consequatur in
                blanditiis reprehenderit quaerat repudiandae animi n on, vero
                error quas iure placeat, quisquam voluptatem perferendis!
              </p>
            </div>

            {/* <img style={{  height:"80vh",width:"60vw" }} src={background} alt="na" /> */}
          </div>
          <div
            class=" col-sm-4 my-3"
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgb(0, 0, 0,0.8)",
            }}
          >
            <div class="mb-md-5 mt-md-4 pb-5 text-center">
              <h2
                class="fw-bold mb-2 text-uppercase text-center text-light "
                style={{ marginTop: "5vh" }}
              >
                LOGIN
              </h2>
              <p class="text-white-50 mb-5 text-center">
                Please enter your Email and password!
              </p>
              <form onSubmit={handleSubmit}>
                <div class="form-outline form-white mb-4 mx-4">
                  <label htmlFor="email" className="form-label text-light">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    value={loginData.email}
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div
                  class="form-outline form-white mb-4 mx-4"
                  style={{ marginTop: "40px" }}
                >
                  <label htmlFor="password" className="form-label text-light">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    value={loginData.password}
                    name="password"
                    id="password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-lg px-5"
                    style={{ marginTop: "40px" }}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="mb-0 text-light" style={{ marginTop: "30px" }}>
                    Don't have an account?
                    <a
                      class=" fw-bold "
                      style={{ color: "aliceblue" }}
                      href="/signup"
                    >
                      Sign Up
                    </a>{" "}
                  </p>
                </div>
              </form>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
