import React from "react";
import Images from "./Images";

function Card(props){
    return(
 <>
    <div className="cards">
    <div className="card">
       <Images imgsrc={props.imgsrc} />
       <div className="cardInfo">
          <span className="cardcategory">
             {props.title}
          </span>
          <h3 className="cardTitle">{props.sname}</h3>
       <a href={props.link} target="_blank">
             <button>Watch Now</button>
          </a>
       </div>
    </div>
    </div>
    </>
    );
 }
 export default Card;