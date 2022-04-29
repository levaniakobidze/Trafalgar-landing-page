import React from "react";
import Container from "../Container/Container";
import "./Services.css";
import ServicesCardItem from "./ServicesCardItem/ServicesCardItem";
import { ReactComponent as Lupa } from "../Icons/Lupa.svg";
import { ReactComponent as Aid } from "../Icons/Aid.svg";
import { ReactComponent as Consult } from "../Icons/Consult.svg";
import { ReactComponent as Details } from "../Icons/Details.svg";
import { ReactComponent as Care } from "../Icons/Care.svg";
import { ReactComponent as Track } from "../Icons/Track.svg";

function Services() {
  return (
    <div className='services'>
      <Container className='services-cont'>
        <div className='services-title'>
          <h1>Our services</h1>
        </div>
        <div className='underline'></div>
        <div className='services-text'>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>

        <div className='services-card-cont'>
          <ServicesCardItem
            img={<Lupa />}
            title={"Search doctor"}
            text={
              "Choose your doctor from thousands of specialist, general, and trusted hospitals"
            }
          />

          <ServicesCardItem
            img={<Aid />}
            title={"Online pharmacy"}
            text={
              "Buy  your medicines with our mobile application with a simple delivery system"
            }
          />
          <ServicesCardItem
            img={<Consult />}
            title={"Consultation"}
            text={
              "Free consultation with our trusted doctors and get the best recomendations"
            }
          />
          <ServicesCardItem
            img={<Details />}
            title={"Details info"}
            text={
              "Free consultation with our trusted doctors and get the best recomendations"
            }
          />
          <ServicesCardItem
            img={<Care />}
            title={"Emergency care"}
            text={
              "You can get 24/7 urgent care for yourself or your children and your lovely familly"
            }
          />
          <ServicesCardItem
            img={<Track />}
            title={"Tracking"}
            text={"Track and save your medical history and health data "}
          />
        </div>
      </Container>
    </div>
  );
}

export default Services;
