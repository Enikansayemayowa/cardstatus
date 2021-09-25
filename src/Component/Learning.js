import React, { useState } from "react";
import "./Learning.css";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import { BsXOctagonFill } from "react-icons/bs";
import moment from "moment";
import img from "../img/1.jpg";

const Learning = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "enikansaye mayowa",
      quote:
        "React components for faster and easier web development.Build your own design system, or start with Material Design.",
      time: Date.now(),
      avatar: img,
    },
  ]);
  return (
    <div className="container">
      <div className="containerwrap">
        {data.map((props) => {
            return(
                <div className="containercard">
          <div className="containerclassrow">
            <div className="containerclasscancel">
              <BsXOctagonFill />
            </div>
            <img className="containerclassavatar" src={props.avatar} alt="1.jpg" />
            {/* <div className='containerclassavatar'></div> */}
          </div>
          {/* <div> */}
          <div className="containerclassname">{props.name}</div>
          <div>
            <ImQuotesRight />
          </div>
          <div className="containerclassquote">{props.quote}</div>
          <div>
            <ImQuotesLeft />
          </div>
          <div className="containerclasstime">
              {/* {""} */}
              {moment(props.now).fromNow()}</div>
          {/* </div> */}
        </div>
            )
        })}
      </div>
    </div>
  );
};

export default Learning;
