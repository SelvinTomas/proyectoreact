import React from 'react';

const Profile = (props) => (
    <>
    <h1>COMPONENTES DE PERFIL</h1>
    <p>Nombre del cliente: {props.name}</p>
    <p>Apellido del cliente: {props.apellido}</p>
    <p>Correo: {props.email}</p>
    <h3>Valor del contador: {props.contador}</h3>
    <button onClick={props.incrementarContadordoble}>Incrementar +2 el contador</button>
    </>
)
export default Profile;