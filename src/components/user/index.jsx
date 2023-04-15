import React from 'react';

class UserComponent extends React.Component{
    constructor(){
        super()
    }
    sayHello = () => {
        console.log("Hola a todos")
    }
    render() {
        return(
            <h1>Hola a toda la comunidad que aprende React!</h1>
            )
    }
}
export default UserComponent;