import React, { Component } from 'react';

export default class Feedcard extends Component {
    render() {
        const card_st = {
            "height" : "8em",
        }

        const card_body = {
            "padding":"0",
            "marginLeft":"10px"
        }
        
        const p_st = {
            "font-size" : "small"
        }

        return (
            <div className="card mt-2 mb-2" style={card_st}>
                <div className="card-body" style={card_body}>
                    <small>{this.props.provider}</small>
                    <a href={this.props.url} rel="noopener noreferrer" target="_blank"><h6>{this.props.title}</h6></a>
                    <p style={p_st}>{this.props.desc}<br/>
                    
                    </p>
                </div> 
            </div>
    );
  }
}