import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import EmployeeService from "../../services/EmployeeService";
import styles from './ListEmployeeComponent.module.css'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        EmployeeService.findAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const findAllEmployees = () => {
        EmployeeService.findAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteEmployee = (employeeid) => {
        EmployeeService.deleteEmployee(employeeid).then((response) => {
            findAllEmployees();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className={styles.body}>
            <div className="container">
                <h2 className="text-center"> Lista de funcionários </h2>
                <Link to="/inserir-funcionario" className="btn btn-primary mb-2">Inserir funcionário</Link>
                <table className="table table-striped table-bordered">
                    <thead>
                        <th> Funcionário Nome</th>
                        <th> Funcionário Telefone</th>
                        <th> Funcionário Email</th>
                        <th> Funções</th>
                        <th> Actions</th>
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
                                        <td >
                                            <Link className="btn btn-info" to={`/editar-funcionario ${employee.id}`}>Editar</Link>
                                            <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: "10px" }}>Deletar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListEmployeeComponent