import React from "react";

import "./Login.css";

export default class Login extends React.Component {

    state = {
        user: "",
        password: ""
    };

    render() {
        return (
            <div className="login-modal">
                <div className="login-container">
                    <h1>Quat Solutions</h1>
                    <h1>Administrador de Proyectos</h1>
                    <label htmlFor="login-user">Usuario</label>
                    <input 
                        id="login-user"
                        type="text"
                        placeholder="Usuario"
                        onChange={(e) => this.setState({
                            user: e.target.value
                        })}
                    />
                    <label htmlFor="login-password">Contraseña</label>
                    <input 
                        id="login-password"
                        type="text"
                        placeholder="Contraseña"
                        onChange={(e) => this.setState({
                            password: e.target.value
                        })}
                    />
                    <button>Iniciar Sesión</button>
                </div>
            </div>
        );
    }

}