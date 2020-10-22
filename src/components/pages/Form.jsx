import React, {Component} from 'react'; 

class Formulario extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: "",
            email: ""
        }

        this.changeText = this.changeText.bind(this); 
    }

    render() { 
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <form id="form1">
                    <div className="ed-grid">
                        <div className="form__item">
                            <label>Ingrese su nombre
                                <input type="text" name="txtNombre" 
                                onChange={this.changeText}/>
                            </label>
                        </div>
                        <div className="form__item">
                            <label>Ingrese su correo electrónico
                                <input type="email" name="txtCorreo"
                                onChange={this.changeText}/>
                            </label>
                        </div>
                        <div className="form__item">
                            <input className="button full" 
                            type="submit" value="Enviar"/>
                        </div>
                    </div>
                </form>
                <div className="ed-grid">
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        ); 
    }
    componentDidMount() {
        const form = document.getElementById('form1');
        form.addEventListener('submit', e => {
            e.preventDefault(); 
        }); 
    }

    changeText(e) {
        if(e.target.name === 'txtNombre') {
            this.setState({
                name: e.target.value
            });
        }
        else 
            this.setState({
                email: e.target.value
            });
    }
}

export default Formulario;