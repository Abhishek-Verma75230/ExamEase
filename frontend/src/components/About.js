import React from "react";
// import peopleIcon from "./people-icon.png"; 

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="d-flex align-items-center mb-4">
           
           
            {/* <img
              src={peopleIcon}
              alt="People Icon"
              className="mr-3"
              style={{ height: "2rem" }}
            /> */}
            
            <h2 className="text-center mb-0">About Us</h2>
          </div>
          <p className="text-center">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat maxime
            est hic deserunt quibusdam nihil dolorem, libero ad adipisci unde eveniet?
            Mollitia suscipit saepe maiores fugit perferendis laboriosam reiciendis modi!
          </p>
          <p className="text-center">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, excepturi
            dignissimos aliquid id magnam tenetur doloribus alias! Distinctio harum omnis ratione dolore
            voluptatum error incidunt. Officiis id dolore minima voluptatum.
          </p>
          <p className="text-center">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, 
           rem qui dolores, et quae hic expedita dolor corrupti quos eius odio facere 
           aut recusandae voluptatibus minus praesentium soluta facilis. Vero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

