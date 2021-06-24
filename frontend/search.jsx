import React from 'react'
import Fetch from 'react-fetch'

export default class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data: null,
            user: ""
        }
    }

    fetchData = () => {
        fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${this.state.user}&auth=pbLiMk8UEEbw9ux5vBmq`, {
          method: "GET",
          dataType: "JSON",
        })
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
            this.setState({
                data: data
            })
        })
        .catch((error) => {
          console.log(error, "catch the hoop")
        })
      }
    
    render (){
        return (
            <>  
                <label id="search">Search:
                    <input type="text" id="search" onChange={this.handleChange.bind(this)}/>
                </label>
                <button type="submit" onClick={this.fetchData.bind(this)}>Search noob</button>
                <div>{this.state.data ? this.state.data.global.name : "waiting"}</div>
                <div>{this.state.data ? this.state.data.global.level : "waiting"}</div>
                <img src={this.state.data ? this.state.data.global.rank.rankImg : "data:image/jpeg;base64,/9j/4 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"} alt="couldn't find image"/>
            </>
        )
    }

    handleChange(event) {
        let target = event.target
        this.setState({
            user: target.value
        })
    }
}

class TestComponent extends React.Component {
    render() {
        let response; // store what we want to output however ASYNCH FUCKS US

        if (this.props.global) { // if this.props is a object aka asynch did good
            response = this.props.global // <= yay
        } else {
            response = "waiting" //< nay
        }
        return (
            <div>{response === "waiting" ? response : response.name}</div>
        )
    }
}
