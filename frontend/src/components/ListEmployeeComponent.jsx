import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/inserir-funcionario');
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <FooterComponent />
                <h2 className="text-center">Lista de funcionários</h2>
                <div className="row">
                    <div className="container">
                        <button className="btn btn-primary" onClick={this.addEmployee}> Inserir Funcionário</button>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Funcionário Nome</th>
                                    <th> Funcionário Telefone</th>
                                    <th> Funcionário Email</th>
                                    <th> Funções</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                            <tr key={employee.id}>
                                                <td> {employee.name} </td>
                                                <td> {employee.phone} </td>
                                                <td> {employee.emailId} </td>
                                                <td> {employee.action} </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent