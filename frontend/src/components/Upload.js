import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import "../App.css";

function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    year: "",
    branch: "",
    topic: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !formData.year || !formData.branch || !formData.topic) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    try {
      const formDataa = new FormData();
      formDataa.append("file", file);
      formDataa.append("upload_preset", "ml_default");
      formDataa.append("resource_type", "raw");
      const uploadResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dssqpdpvn/upload",
        formDataa
      );

      if (uploadResponse.data && uploadResponse.data.secure_url) {
        const fileUrl = uploadResponse.data.secure_url;
        await axios.post("https://examease.onrender.com/api/upload", {
          ...formData,
          link: fileUrl,
        });

        alert("Data uploaded successfully!");
        setFile(null);
        setFormData({
          year: "",
          branch: "",
          topic: "",
        });
      } else {
        console.error("Error uploading file to Cloudinary:", uploadResponse);
        alert("Error uploading file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Error uploading data. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="container bg-light my-3"
        style={{ width: "400px", height: "89vh", borderRadius: "5px" }}
      >
        <div className="mb-md-5 mt-md-4 pb-5 text-center">
          <h2
            className="fw-bold mb-2 text-uppercase text-center text-dark"
            style={{ paddingTop: "20px" }}
          >
            Upload Data
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outline form-white mx-4">
              <label
                className="form-label text-dark"
                style={{ paddingTop: "20px" }}
              >
                Year:
              </label>
              <select
                className="form-control"
                onChange={handleChange}
                value={formData.year}
                name="year"
              >
                <option value="">Select Year</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
            </div>

            <div
              className="form-outline form-white mx-4"
              style={{ marginTop: "35px" }}
            >
              <label className="form-label text-dark">Branch:</label>
              <select
                className="form-control"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Select Your Branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EE">ELECTRICAL</option>
                <option value="ME">ME</option>
                <option value="PE">PE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="CHEMICAL">CHEMICAL</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
              </select>
            </div>

            <div
              className="form-outline form-white mx-4"
              style={{ marginTop: "35px" }}
            >
              <label className="form-label text-dark">Topic:</label>
              <input
                type="text"
                className="form-control"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>

            <div
              className="form-outline form-white mx-4"
              style={{ marginTop: "35px" }}
            >
              <label className="form-label text-dark">File:</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-outline-light btn-lg px-5"
                style={{ marginTop: "35px" }}
              >
                Submit
              </button>
            </div>

            <div>
              <p className="mb-0 text-dark" style={{ marginTop: "30px" }}>
                Didn't Logged In?
                <a className="fw-bold" href="/signup">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
