import React, {Component} from 'react';
import axios from 'axios';


class CitySearch extends Component{
    constructor(props)
    {
     super(props);
        this.state = {
            //cityName: '',
            //zipcode : null,
            zipcode: [],
         };
    }

    //nameGiven = this.state.cityName.toUpperCase();
    
    handleChange = event => {
        const input = event.target.value;
        let cityName = input.toUpperCase();

        console.log(this.state.cityName);
        this.componentDidMount(cityName);
    }

    componentDidMount(nameGiven){
        axios.get('http://ctp-zip-api.herokuapp.com/city/' + nameGiven).then((response) => {
            const data = response.data;

            console.log(data)
            /*
            const newZipObj = {
                text: data.test,
            }

            this.setState({zipcode: newZipObj});*/

            this.setState({zipcode: data})


        })
            .catch((error => console.log(error)));

            
    }

    
    render()
    {
        const items = this.state.zipcode.map(function(items){
            return <li>{items}</li>;
        });

        let display;

        if(this.state.zipcode.length > 0){
            return( 
                <div>

                <h1>Type in a City</h1>
                {/*<p>{this.state.zipcode && this.state.zipcode.text}</p>*/}
                <input type="text" placeholder="Type in a city. Ex)Akron" onChange={this.handleChange}/>

                <h1>Zipcodes under that city:</h1>
    
                <ul>
                    {items}
                </ul>
    
                </div>
            )}
        

        else{

            return(
            
            <div>
            <div>
                <h1>Type in a City</h1>
                {/*<p>{this.state.zipcode && this.state.zipcode.text}</p>*/}
                <input type="text" placeholder="Type in a city. Ex)Akron" onChange={this.handleChange}/>
                <p>No Zipcodes currently displayed</p>
               
               
            </div>

            </div>);
        }

            

            
        
        
    }

    
}

export default CitySearch

//this.state.zipcode&&this.state.zipcode.text gives it time to render