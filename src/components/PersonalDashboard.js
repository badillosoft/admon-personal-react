import React from 'react';

import './PersonalDashboard.css';

export default class PersonalDashboard extends React.Component {

    state = {
        data: false,
        personal: []
    };

    async componentWillMount() {
        const response = await fetch("http://192.168.15.58:8080/api/personal/all");
        if (!response.ok) {
            const text = await response.text();
            alert("Error al cargar los datos del servidor");
            console.log(text);
            return;
        }
        const json = await response.json();

        this.setState({
            data: true,
            personal: json
        });
    }

    render() {
        const personal_ui = this.state.personal.map(p => {
            return (
                <div key={Math.random().toString(16).slice(2)} className="personal">
                    <p>{`${p.nombre} ${p.ap_paterno} ${p.ap_materno}`}</p>
                    <p>{`Estatus: ${p.estatus}`}</p>
                    <p>{`CURP: ${p.curp}`}</p>
                    <p>{`RFC: ${p.rfc}`}</p>
                    <img src={`data:image/png;base64,${p.foto}`} />
                </div>
            );
        });
        return (
            <div className="dashboard">
                <div key={Math.random().toString(16).slice(2)} className="modal" hidden={this.state.data} />
                {
                    personal_ui
                }
            </div>
        );
    }

}