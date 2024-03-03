
import React from "react";
import star from "../Images/star.png"

export default function Card(props){
    let badgeText
    if(props.item.openSpots===0){
        badgeText= "SOLD OUT"
    }
    else if (props.item.location=== "Online"){
        badgeText="ONLINE"
    }

    return(
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../Images/${props.item.coverImg}`} className="card--image" alt="img"/>
            <div className="stats">
            <img src={star} alt="star-logo"  className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray"> (props.item.stats.reviewCount) •</span>
                <span className="gray"> {props.item.location}</span>
            </div>
            <p  className="card--title">{props.item.title}</p>
            <p  className="card--price"><span><b>From ${props.item.price}</b></span>/ person</p>
        </section>
    )
}