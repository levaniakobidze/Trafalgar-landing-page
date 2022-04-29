import React from "react";
import "./Home.css";
import Container from "../Container/Container";
function Home() {
  return (
    <div className='home'>
      {" "}
      <Container className='home-cont'>
        <div className='home-left-side'>
          <h1 className='title'>Virtual healthcare for you</h1>
          <p className='text'>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button>Consult today</button>
        </div>
        <div className='home-right-side'>
          <img
            className='home-img'
            src={
              "https://res.cloudinary.com/diyky5uya/image/upload/v1651227624/trafalgar-header_illustration_1_jeprwl.png"
            }
            alt=''
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
