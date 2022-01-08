import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import EmployeeService from "../../services/EmployeeService";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    }, [])

    return (

        <div className="container">
            <h2 className="text-center"> Lista de funcionários </h2>
            <Link to = "/inserir-funcionario" className="btn btn-primary mb-2">Inserir funcionário</Link>
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
                        employees.map(
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
    )
}
export default ListEmployeeComponent