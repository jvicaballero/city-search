import React, {Component} from 'react';
import axios from 'axios';


class CitySearch extends Component{
    constructor(props)
    {
     super(props);
        this.state = {
           
            zipcode : null,
            cityName: "",

         };
    }


    nameGiven = this.state.cityName.toUpperCase();
    
    handleChange = event => {
        this.setState({
            cityName: event.target.cityName,
            
        });

        console.log(this.state.cityName);
    }

    componentDidMount(){
        axios.get('http://ctp-zip-api.herokuapp.com/' + this.nameGiven).then((response) => {
            const data = response.data;
            console.log(data)
            const newZipObj = {
                text: data.test,
            }

            this.setState({zipcode: newZipObj});
        })
            .catch((error => console.log(error)));

            
    }

    

    render()
    {
        return(
            <div>
                <p>{this.state.zipcode && this.state.zipcode.text}</p>
                <input type="text" placeholder="Type in a city. Ex)Akron" onChange={this.handleChange}/>
                {/*<button type="submit" value="submit">Submit</button>8*/}
               
            </div>
        );
        
    }

    
}

export default CitySearch

//this.state.zipcode&&this.state.zipcode.text gives it time to render