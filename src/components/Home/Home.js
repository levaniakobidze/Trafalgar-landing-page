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
          <button>
            <div className='hover-div'></div>
          </button>
        </div>
        <div className='home-right-side'>
          <img
            src='https://res-console.cloudinary.com/diyky5uya/thumbnails/v1/image/upload/v1651170432/dHJhZmFsZ2FyLWhlYWRlcl9pbGx1c3RyYXRpb25fMV95ajIyOWE=/preview'
            alt=''
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
