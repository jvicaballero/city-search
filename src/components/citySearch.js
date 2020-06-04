import React, {Component} from 'react';
import axios from 'axios';


class CitySearch extends Component{
    constructor(props)
    {
     super(props);
        this.state = {
            zipcode : null
         };
    }

    componentDidMount(){
        axios.get('http://ctp-zip-api.herokuapp.com').then((response) => {
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
                <input type="text" placeholder="Type in a city. Ex)Akron"/>
                <button type="submit">Submit</button>
            </div>
        );
    }
}

export default CitySearch

//this.state.zipcode&&this.state.zipcode.text gives it time to render