import {React, Component} from "react";
import Database from "../Database.json";
import "../assets/datorer.css"

class Datorer extends Component{
  state={
    items: Database
  }


  render(){
    return(
      <div>
        <h2>Datorer</h2>
        <div className="datorer-container">
          
            {this.state.items.map((item, index) =>
              {
                return <div key={index}>
                  <img src={item.pic}></img>
                  <h4>{item.name}</h4>
                  <div>{item.about}</div>
                </div>
              }
            )}
          

        </div>
      </div>
    )
  }
}

export default Datorer; 