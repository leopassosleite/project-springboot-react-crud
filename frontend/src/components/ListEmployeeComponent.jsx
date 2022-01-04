import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de funcionários</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Funcionário Nome</th>
                                <th> Funcionário Sobrenome</th>
                                <th> Funcionário Email</th>
                                <th> Funções</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firtsName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
                                        <td> {employee.action} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent