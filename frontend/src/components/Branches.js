import React from "react";
import Card from "./Card";
import "./Branches.css";
import com from "../photos/computer.png";
import elec from "../photos/electrical.png";
import ece from "../photos/ece.png";
import chem from "../photos/chemical.png";
import civil from "../photos/civil.png";
import maths from "../photos/maths.png";
import prod from "../photos/prod.png";
import { Link, useParams } from 'react-router-dom';
import mech from "../photos/mechanical.png";

import phy from "../photos/Physics.png";
  
function Branches() {
  const { year } = useParams();
  return (
    <div>
      <div className="year-container">
        <h2>Select Your Branch</h2>

        <div class="game-board">
         
          <div class="box">
          <Link to={`/links/${year}/CSE`}>
            <Card name="CSE" image={com} />
            </Link>
          </div>
         
          <div class="box">
            <Card name="Electrical" image={elec} />
          </div>
          <div class="box">
            <Card name="ECE" image={ece} />
          </div>
          <div class="box">
            <Card name="Chemical" image={chem} />
          </div>
          <div class="box">
            <Card name="Civil" image={civil} />
          </div>
          <div class="box">
            <Card name="Production" image={prod} />
          </div>
          <div class="box">
            <Card name="Mechanical" image={mech} />
          </div>
          <div class="box">
            <Card name="Maths" image={maths} />
          </div>
          <div class="box">
            <Card name="Physics" image={phy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;
