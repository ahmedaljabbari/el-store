import React from "react";
import "../assets/datorer.css";

export default function ProductItem(props){

  const items = props.itemList;
  return(
    <div>
      
      <div className="datorer-container">
          {
          items.map((item, index) =>
            {
              return <div key={index}>
                  <img src={item.pic} alt="Bild saknas"></img>
                  <h4>{item.name}</h4>
                  <b>{item.price} kr</b>
                  <a href={"/products/" + index} id="btnInfo">Visa Info</a>
              </div>
            })
          }
      </div>
    </div>
  )
}