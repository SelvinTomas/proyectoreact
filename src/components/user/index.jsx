import React, { Component } from 'react';
import Profile from './profile';
class UserComponent extends Component{
    constructor(){
        super();
        this.state = {
            nombre : 'Selvin',
            apellido : 'Tomás Ch.',
            edad : 26,
            email : 'tomas.a12108@gmail.com',
            contador : 0
        }
    }
    sayHello = () => {
        console.log("Hola a todos")
    }
     aumentarContador = () =>{
        let {contador} = this.state
         this.setState ({
             contador : contador +=1 

         })
    }

    incrementarContadordoble = () =>{
        let {contador} = this.state
         this.setState ({
             contador : contador +=2 

         })
    }
    // aumentarContador = () =>{
    //     this.setState(prevState =>{
    //         return prevState.contador +=1
    //     })
    // }

    // decrementarContador = () =>{
    //     this.setState(prevState =>{
    //         return prevState.contador -=1
    //     })
    // }

    decrementarContador = () =>{
        let {contador} = this.state
         this.setState ({
             contador : contador -=1 

         })
        
    }
    render() {
        const {nombre, apellido, edad, email, contador} = this.state
        return(
            <>
                <h1>Hola a toda la comunidad que aprende React!</h1>
                <p>Hola yo soy: {nombre} {apellido} y tengo {edad} años </p>
                <p>Contador: {contador}</p>

                <button onClick={() => this.aumentarContador()}>Incrementar contador</button>
                <button onClick={() => this.decrementarContador()}>Decrementar</button>
                <Profile
                    name = {nombre}
                    apellido = {apellido}
                    email = {email}
                    contador = {contador}
                    incrementarContadordoble = {this.incrementarContadordoble}
                />
            </>
            )
    }
}
export default UserComponent;