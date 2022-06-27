import React from "react";
import WatchIcon from '@material-ui/icons/Watch';


const Card=(props)=>{
    return(
  <div className="cards">
    <div className="card">
    <img src={props.imgscr} alt="myPic"  className="card__img"/>
    <div className="card__info">
      <span className="card__category">{props.title}</span>
      <h3 className="card__title"><span className="s">{props.sname}</span></h3>
      <a href={props.links} target="_blank">
       
        <button className="btn">Watch Now  <WatchIcon/></button>
      </a>
    </div>
  
    </div>
    </div>
    );
  }
  export default Card;