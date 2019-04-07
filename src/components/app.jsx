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
            placeholder: "Name",
            hasLoaded: false
        }
    }

    //toggle the hasloaded property so change the state when clicked
    handleClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
        console.log(this.state.hasLoaded)

    }

    componentDidMount=()=>{
        this.setState({hasLoaded: true})
    }

    render() {
        //need if statement about hasLoaded
        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1> Hello {this.state.name}, {this.state.text}</h1>
                    <input
                        placeholder={this.state.placeholder}
                        onChange={(event) => (this.setState({ placeholder: event.target.value }))}>
                    </input>
                    <br></br>
                    <button
                        onClick={this.handleClick}
                    > Click Me!</button>
                </React.Fragment>
            );
        } else {
            return (
                <>
                    <h1>Loading...</h1>;
                    <button
                        onClick={this.handleClick}
                    >Click to load!</button>
                </>
            )
        }
    }
    buttonClick() {
        this.setState()
    }
}
export default App
