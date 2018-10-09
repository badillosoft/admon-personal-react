import React from 'react';
import './PersonalNuevo.css';

// <PersonalNuevo url="http://192.168.15.58:8080" />
// <PersonalNuevo url="http://quat.com" />
export default class PersonalNuevo extends React.Component {
    state = {
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        curp: "",
        rfc: "",
        estatus: "",
        fecha_ingreso: "",
        requeridos: {
            nombre: "Nombre",
            ap_paterno: "Apellido Paterno"
        }
    };

    async submit() {
        for (let key in this.state.requeridos) {
            if(!this.state[key]) {
                alert(`Falta el campo ${this.state.requeridos[key]}`);
                return;
            }
        }

        const formData = new FormData();
        formData.append("id", 0);
        formData.append("nombre", this.state.nombre);
        formData.append("ap_paterno", this.state.ap_paterno);
        formData.append("ap_materno", this.state.ap_materno);
        formData.append("curp", this.state.curp);
        formData.append("rfc", this.state.rfc);
        formData.append("estatus", this.state.estatus);
        formData.append("fecha_ingreso", `${this.state.fecha_ingreso} 12:00:00`);
        formData.append("file", this.fileInput.files[0]);
        const response = await fetch(`${this.props.url}/api/personal/create`, {
            method: "post",
            body: formData
        });
        if (!response.ok) {
            const text = await response.text();
            console.log(text);
            return;
        }
        alert("Formulario enviado");
    }

    render() {
        return (
            <div>
                <h1>Crear Nuevo Empleado</h1>
                <label htmlFor="personal-nuevo-nombre">Nombre</label>
                <input 
                    id="personal-nuevo-nombre"
                    type="text"
                    placeholder="Nombre"
                    required
                    onChange={(e) => this.setState({
                        nombre: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-ap_paterno">Apelido Paterno</label>
                <input 
                    id="personal-nuevo-ap_paterno"
                    type="text"
                    placeholder="Apellido Paterno"
                    onChange={(e) => this.setState({
                        ap_paterno: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-ap_materno">Apellido Materno</label>
                <input 
                    id="personal-nuevo-ap_materno"
                    type="text"
                    placeholder="Apellido Materno"
                    onChange={(e) => this.setState({
                        ap_materno: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-curp">CURP</label>
                <input 
                    id="personal-nuevo-curp"
                    type="text"
                    placeholder="CURP"
                    onChange={(e) => this.setState({
                        curp: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-rfc">RFC</label>
                <input 
                    id="personal-nuevo-rfc"
                    type="text"
                    placeholder="RFC"
                    onChange={(e) => this.setState({
                        rfc: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-estatus">Estatus</label>
                <input 
                    id="personal-nuevo-estatus"
                    type="text"
                    placeholder="Estatus"
                    onChange={(e) => this.setState({
                        estatus: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-fecha_ingreso">Fecha de Ingreso</label>
                <input 
                    id="personal-nuevo-fecha_ingreso"
                    type="date"
                    placeholder="Fecha de Ingreso"
                    onChange={(e) => this.setState({
                        fecha_ingreso: e.target.value
                    })}
                />
                <label htmlFor="personal-nuevo-foto">Foto</label>
                <input 
                    id="personal-nuevo-foto"
                    type="file"
                    ref={ref => this.fileInput = ref}
                />
                <button onClick={e => this.submit()}>enviar</button>
            </div>
        );
    }
}