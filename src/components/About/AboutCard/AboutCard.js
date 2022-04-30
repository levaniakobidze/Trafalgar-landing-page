import React, { useState } from "react";
import "./AboutCard.css";
import { data } from "./AboutCardData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";

function AboutCard() {
  const [index, setIndex] = useState(0);
  const [dataArray, setDataArray] = useState(data);

  const increase = () => {
    if (index >= dataArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(() => index + 1);
    }
  };
  const decrease = () => {
    if (index <= 0) {
      setIndex(() => index + 1);
    } else {
      setIndex(() => index - 1);
    }
  };

  console.log(index);

  return (
    <div className='about-card'>
      <h1 className='about-card-title'>What our customer are saying</h1>
      <div className='about-card-underline'></div>
      <div className='about-card-manin-content'>
        <div className='about-card-left'>
          <div className='about-card-img'>
            <img src={dataArray[index].img} alt='' />
          </div>
          <div className='about-card-name'>
            <h3>{dataArray[index].name}</h3>
            <p>{dataArray[index].profesion}</p>
          </div>
        </div>
        <div className='about-card-right'>
          <p>"{dataArray[index].text}"</p>
        </div>
      </div>
      <div className='about-card-arrows'>
        <div className='arrows-left'>
          <KeyboardDoubleArrowLeftRoundedIcon
            className='arrow-icon1 '
            onClick={decrease}
          />
        </div>
        <div className='arrows-right'>
          <KeyboardDoubleArrowRightRoundedIcon
            className='arrow-icon2'
            onClick={increase}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
