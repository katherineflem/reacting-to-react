// //must import react from the node modules- this is where you start
// import React from 'react'
import React, { Component } from 'react';

// //created a function called App and passed in props called name
// //when function is called in index.js and rendered it will pass in the property we defined into the h1 we are returning
// const App = (props) => {
//     return (
//     <h1>Hello {props.name}</h1>);

// }
// //must export this to then be imported in other places

//CLASS BASED COMPONENT

//must have constructor and super
//must define state object in constructor 
class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "Katherine",
            text: "Welcome to React", 
            inputVal: "Name...", //what is being typed
            hasLoaded: false //start as false and toggle when mounted to true
        }
    }

    //function to toggle the hasloaded property so change the state when clicked
    handleClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
        console.log(this.state.hasLoaded)

    }
    //set initial information in here:
    componentDidMount = () => {
        this.setState({ hasLoaded: true })
    }

//this part renders to the screen:
    render() {
        //need if statement about hasLoaded
        if (this.state.hasLoaded === true) {
            return (
                <>
                    <h1> Hello {this.state.name}, {this.state.text}</h1>
                    <input
                        value={this.state.inputVal}
                        onChange={(event) => (this.setState({ inputVal: event.target.value }))}> 
                    </input>
                    <br></br>
                    <h2>{this.state.inputVal}</h2>
                    <button
                        onClick={this.handleClick}
                    > Click Me!</button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Loading...</h1>;
                    <button
                        onClick={this.handleClick}//calling the handleclick function so it toggles hasloaded to true/false depening on if content has loaded in the dom
                    >Click to load!</button>
                </>
            )
        }
    }
}
export default App

//onChange
//onClick
//this.state