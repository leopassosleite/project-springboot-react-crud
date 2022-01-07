import React, { Component } from "react";
class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone: '',
            emaildId: '',
            action: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { name: this.state.name, phone: this.state.phone, emailId: this.state.emaildId, action: this.state.action }
        console.log('employee => ' + JSON.stringify(employee));
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changePhoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emadilId: event.target.value });
    }

    changeActionHandler = (event) => {
        this.setState({ action: event.target.value });
    }

    cancel() {
        this.props.history.push('/funcionarios');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Inserir funcionário</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nome completo*</label>
                                        <input placeholder="Nome" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefone*</label>
                                        <input placeholder="Telefone" name="phone" className="form-control"
                                            value={this.state.phone} onChange={this.changePhoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email*</label>
                                        <input placeholder="Email" name="emaildId" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Função*</label>
                                        <input placeholder="função" name="action" className="form-control"
                                            value={this.state.action} onChange={this.changeActionHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent