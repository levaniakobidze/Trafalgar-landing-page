import { Container } from "@mui/material";
import React from "react";
import "./About.css";
import AboutCard from "./AboutCard/AboutCard";

function About() {
  return (
    <div className='about'>
      <Container className='about-cont'>
        <div className='up'>
          <div className='left-side'>
            <h1 className='up-left-title'>Leading healthcare providers</h1>
            <div className='up-left-underline'></div>
            <p className='up-left-text'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <a href='#' className='up-left-button'>
              Learn more
            </a>
          </div>
          <div className='right-side'>
            <img
              src='https://res.cloudinary.com/diyky5uya/image/upload/v1651314377/traf_q2fvrx.png'
              alt='image'
            />
          </div>
        </div>
        <div className='down'>
          <div className='down-left-side'>
            <img
              src='https://res.cloudinary.com/diyky5uya/image/upload/v1651315755/trafal1_eaykef.png'
              alt='image'
            />
          </div>
          <div className='down-right-side'>
            <h1 className='down-right-title'>Download our mobile apps</h1>
            <div className='up-right-underline'></div>
            <p className='down-right-text'>
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <a href='#' className='download-button'>
              {" "}
              Download{" "}
            </a>
          </div>
        </div>

        {<AboutCard />}
      </Container>
    </div>
  );
}

export default About;
