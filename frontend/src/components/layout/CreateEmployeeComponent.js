import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from "../../services/EmployeeService";
import styles from './CreateEmployeeComponent.module.css'

const CreateEmployeeComponent = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [emailId, setEmailId] = useState('')
    const [action, setAction] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { name, phone, emailId, action }

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate("/funcionarios")
            }).catch(error => {
                console.log(error)
            })

        } else {
            EmployeeService.addEmployee(employee).then((response) => {

                console.log(response.data)

                navigate("/funcionarios")

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        EmployeeService.findEmployeeId(id).then((response) => {
            setName(response.data.name)
            setPhone(response.data.phone)
            setEmailId(response.data.emailId)
            setAction(response.data.action)
        }).catch(error => {
            console.log(error)
        })
    })

    const CancelEmployee = (e) => {
        navigate("/funcionarios")
    }

    const title = () => {

        if (id) {
            return <h2 className="text-center">Editar funcionário</h2>
        } else {
            return <h2 className="text-center">Inserir funcionário</h2>
        }
    }

    return (
        <div className={styles.body}>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nome completo*</label>
                                    <input placeholder="Nome" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-labl">Telefone*</label>
                                    <input placeholder="Telefone" name="phone" className="form-control"
                                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email*</label>
                                    <input placeholder="Email" name="emaildId" className="form-control"
                                        value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Função*</label>
                                    <input placeholder="função" name="action" className="form-control"
                                        value={action} onChange={(e) => setAction(e.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Salvar</button>
                                <button className="btn btn-danger" onClick={(e) => CancelEmployee(e)} style={{ marginLeft: "10px" }}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateEmployeeComponent