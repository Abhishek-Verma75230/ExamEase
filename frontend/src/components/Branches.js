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

import mech from "../photos/mechanical.png";

import phy from "../photos/Physics.png";

function Branches() {
  // for cse
  // const svg1 = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="60"
  //     height="60"
  //     fill="Red"
  //     class="bi bi-laptop"
  //     viewBox="0 0 16 16"
  //   >
  //     <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
  //   </svg>
  // );
  // const svg2 = (
  //      //for mechanical
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="60"
  //     height="60"
  //     fill="currentColor"
  //     class="bi bi-gear"
  //     viewBox="0 0 16 16"
  //   >
  //     <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
  //     <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
  //   </svg>
  // );

  return (
    <div>
      <div className="year-container">
        <h2>Select Your Branch</h2>

        <div class="game-board">
          <div class="box">
            <Card name="CSE" image={com} />
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
