import React, { Component } from "react";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: []
        }
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
                                this.state.employee.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firsName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
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