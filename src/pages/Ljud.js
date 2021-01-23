import {React, Component} from "react";
import Database from "../Database.json";
import "../assets/datorer.css"


class Bildscreen extends Component{

  state={
    items: Database
  }

  render(){
    return(
      <div>
        <h2 id="datorTitel">Ljud</h2>
        <div className="datorer-container">
          
            {
            this.state.items.map((item, index) =>
              {
                while(item.genre === "ljud"){
                  return <div key={index}>
                    <img src={item.pic} alt="Dator"></img>
                    <h4>{item.name}</h4>
                    <b>{item.price} kr</b> <br />
                    <button type="button" id="btnInfo">Visa Info</button>
                </div>
                }
                
              }
            )}
          

        </div>
      </div>
    )
  }
}

export default Bildscreen; 