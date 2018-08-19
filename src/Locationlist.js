import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locations from'./locations';


export class Locationlist extends React.Component {



    componentDidMount(){
      this.setState({
      	locations: locations
      })
    }


//读取App.js的onPlaceClick数据
    handleClick = (place) => {
      this.props.onPlaceClick(place);
    };

  //更新搜索框数据，筛选出搜索框与地点列表的相同项  
    updateQuery = (query) => {
      this.props.updatePlaces(query);
  }
                               


   	render(){
		return(
		  <div>
		    <p>Location List</p>
		    <input type="text" aria-label="input" tabIndex="0" onChange= { event => this.updateQuery(event.target.value)}  />
		    <ul>
		    {this.props.locations.map(location => (
              <li
                key={location.title}
                onClick={(event) => this.handleClick(location.title)}
                onKeyPress={
                  e =>{
                    if(e.key == '' || e.key =='Enter'){
                      console.log(e.key)
                      this.handleClick(location.title)
                    }
                  }
                }
                tabIndex="0"
                role="button"
              >
                {location.title}
              </li>
            ))}
		    </ul>
		    
		  </div>
		)


		
        
		  
	   	
	   }
	


}


export default Locationlist