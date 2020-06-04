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
        return(
            
            <div>
                {/*<p>{this.state.zipcode && this.state.zipcode.text}</p>*/}
                <input type="text" placeholder="Type in a city. Ex)Akron" onChange={this.handleChange}/>
               
                <div>

                <h1>zipcodes under that city:</h1>

                <ul>
                    {items}
                </ul>

                </div>
            </div>

            
        );
        
    }

    
}

export default CitySearch

//this.state.zipcode&&this.state.zipcode.text gives it time to render