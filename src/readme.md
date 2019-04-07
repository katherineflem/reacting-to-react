Class based components 

extended from the React.Component base class

State-- allows components to change their output over time without violating the the "pure function" restricting rule that makes you not be able to modify props 
--typically used to re-render as a response to a user-generated action or network responses
-- state is private and controlled by the stateful component(has input that the user can add to and manipulate)

Need a constructor for the class and a super()- both have props as parameters

To access state, we call this.state.propertyName but to set state we invoke the setState() method and that re-renders the component that was changed

your import statement for react changes:
import React, { Component } from 'react'-- {component is a class  inside of the react library}

each class based component has it's own state object

state object-- used to record and react to user events in a particular component
props are generic values and inputs for a component to accept in functions