import {React, Component} from "react";
import ProductItem from "../components/productItem";
import getAll from "../Api/artiklar";


class Home extends Component{


  state={
    items: []
  }

  componentDidMount(){
    getAll().then( data => {
      this.setState({items: data})
    });
  }

  render(){
    return(
      <div>
        <h2 id="datorTitel">Alla produkter</h2>
        <ProductItem itemList={this.state.items}/>
      </div>
    )
  }
}

export default Home; 