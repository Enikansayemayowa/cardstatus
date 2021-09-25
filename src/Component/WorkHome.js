import React, { useState } from "react";
import "./WorkHome.css";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import { BsXOctagonFill } from "react-icons/bs";
import moment from "moment";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";

const WorkHome = () => {
  const [data, setData] = useState([
    {
      id: 1,
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      name: "Mayowa",
      time: Date.now(),
      Avatar: img1,
    },

    {
      id: 2,
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      name: "Ibukun",
      time: Date.now(),
      Avatar: img2,
    },

    {
      id: 3,
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      name: "Akinola",
      time: Date.now(),
      Avatar: img3,
    },

    {
      id: 4,
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      name: "Abayomi",
      time: Date.now(),
      Avatar: img4,
    },

    {
      id: 5,
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      name: "Opeoluwa",
      time: Date.now(),
      Avatar: img5,
    },
  ]);

  return (
    <div className="container">
      <div className="containerWrapper">
        {data.map((props) => {
          return (
            <div className="containercard">
              <div className="containerclassrow">
                <div className="containercardrowcancel">
                  <BsXOctagonFill />
                </div>
                <img
                  className="containercardrowavatar"
                  alt="1.jpg"
                  src={props.Avatar}
                />
                {/* <img className="containercardrowavatar" alt="2.jpg" src={props.Avatar} /> */}
              </div>

              <div className="containercardquote">
                <div>
                  <ImQuotesRight />
                </div>

                <div>{props.quote}</div>
                <div>
                  <ImQuotesLeft />
                </div>
              </div>
              <div className="containercardname">{props.name}</div>
              <div className="containercardtime">
               
                {""} {moment(props.now).fromNow()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHome;
