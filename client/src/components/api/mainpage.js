import React, { Component } from 'react';
import axios from 'axios'
import Feedcard from "./feedcard.component"

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : "India",
            items : [],
        };
    }

    handleClick(l){
        this.setState({
            location:l
        })

        axios.get('https://covid-news-react-app.cognitiveservices.azure.com//bing/v7.0/news/search?q=coronavirus%20'+l, {
            headers : {
                'Ocp-Apim-Subscription-Key': 'f89e26f0ad4e402a882efa2650fbdb61'
            }
        }).then(res => {
            const articles = res.data.value;
            this.setState({items:articles});
        }).catch(function (error) {
            console.log(error)
        })
    }

    componentDidMount() {
        axios.get('https://covid-news-react-app.cognitiveservices.azure.com//bing/v7.0/news/search?q=coronavirus%20India', {
            headers : {
                'Ocp-Apim-Subscription-Key': 'f89e26f0ad4e402a882efa2650fbdb61'
            }
        }).then(res => {
            const articles = res.data.value;
            this.setState({items:articles});
        }).catch(function (error) {
            console.log(error)
        })
    }
    
    render() {
        console.log(toString(process.env.REACT_APP_KEY))
        const locations = {
            "backgroundColor":"#dcdcde",
            "paddingLeft":"0",
            "paddingRight":"0",
            "overflow-y":"scroll",
            "height":"100vh",
            "fontFamily":"Quantico"
        }
        const feed = {
            "marginTop":"50px",
            "backgroundColor" : "white",
            "overflow-y":"scroll",
            "height":"50vh",
            
        }
        
        const card_st = {
            "fontFamily":"Alberta",
            "fontSize":"2em",
            "padding":"0",
            "margin":"0",
            "text-align":"center",
            
        }
        
        const {items} = this.state;

        return (
            <div className="container-fluid">
               
                    <div className="col" style={feed}>
                        <p style={card_st}>
                            Latest News on COVID-19
                        </p>
                        {items.map(item => 
                            <Feedcard title={item.name} desc={item.description} url={item.url} provider={item.provider[0].name}/>    
                        )}
                        
                    </div>
                </div>
          
    );
  }
}