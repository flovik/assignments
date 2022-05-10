import React from "react";
import '../styles/LandingPage.css'
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Button } from "@mui/material";
const LandingPage = () => {
  return (
    <>
      <header>
        <ParticlesBg color="#bc42f5" type="cobweb" bg={true} />
        <h1 className="main-title text-center">Welcome to Cartela Medicala!</h1>
        <div className="buttons text-center">
          <Link to="/login">
            <Button variant="contained" size="large" style={{margin: "20px"}}>Log In</Button>
          </Link>
          <Link to="/patientRegister">
            <Button variant="contained" size="large">Register</Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
