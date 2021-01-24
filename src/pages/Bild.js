import { React, Component } from "react";
import Database from "../Api/Database.json";
import "../assets/datorer.css";

class Bild extends Component {
  state = {
    items: Database,
  };

  render() {
    return (
      <div>
        <h2 id="datorTitel">TV och Bild</h2>
        <div className="datorer-container">
          {this.state.items.map((item, index) => {
            while (item.genre === "bild") {
              return (
                <div key={index}>
                  <img src={item.pic} alt="Bild enhet"></img>
                  <h4>{item.name}</h4>
                  <b>{item.price} kr</b> <br />
                  <a href={"/products/" + index} id="btnInfo">Visa Info</a>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Bild;
