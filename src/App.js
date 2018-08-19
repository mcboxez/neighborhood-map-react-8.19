import React, { Component } from 'react';
import './App.css';
import locations from'./locations';

import Mapcontainer from './Mapcontainer'
import Locationlist from './Locationlist'

class App extends Component {
  state = {
      places: [],
      selectedPlace: {}
    };

//让places数组获得locations.js的地点信息
  componentDidMount(){
   this.setState({
    places: locations
   });
  }

//列表点击事件
  handlePlaceClick = place => {
    this.setState({
      selectedPlace: place
    });
  };

//建立updatePlaces，建立render return的<Locationlist>的updatePlaces属性，其中的{this.ipdatePlace}即提取回一下内容，
//使Locationlist能使用this.props.updatePlaces提取App.js的updatePlaces的内容。
  updatePlaces = (query) =>{
    console.log(query)
    if (query !==""){
      this.setState({
        places: locations.filter(function(location){
          return location.title.toLowerCase().indexOf(query) !==-1;      
        })
      })
    } else{
      this.setState({
        places: locations
      })  
    }
  }
    
  render() {
    const {places, selectedPlace} = this.state;
    return (
      <div className="App" role='application' >
      <div className="List" role='locationlist'>
        <Locationlist 
        updatePlaces={this.updatePlaces}
        onPlaceClick={this.handlePlaceClick}
        locations={this.state.places}/>
      </div>
      <div className="Map" role='Mapcontainer'>
        <Mapcontainer 
        places={places}
        selectedPlace={selectedPlace}
        />
        </div>
      </div>
    );
  }
}

export default App;
