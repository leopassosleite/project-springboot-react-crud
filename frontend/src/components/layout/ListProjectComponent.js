import React, { useState } from "react";

import { Link } from 'react-router-dom'

const ListProjectComponent = () => {

    const [projects, setProjects] = useState([])
    return (
        <div className="container">
            <h2 className="text-center"> Projetos </h2>
            <Link to="/inserir-funcionario" className="btn btn-primary mb-2">Inserir funcionário</Link>
            <table className="table table-striped table-bordered">
                <thead>
                    <th> Id Projeto</th>
                    <th> Projeto</th>
                    <th> Valor Investido</th>
                    <th> Categoria</th>
                </thead>
                <tbody>
                    {
                        projects.map(
                            project =>
                                <tr key={project.id}>
                                    <td> {project.name} </td>
                                    <td> {project.value} </td>
                                    <td> {project.category} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListProjectComponent