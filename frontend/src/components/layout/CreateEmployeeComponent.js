import React, { useState } from "react";
import styles from './CreateEmployeeComponent.module.css'
const CreateEmployeeComponent = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [emailId, setEmailId] = useState('')
    const [action, setAction] = useState('')

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { name, phone, emailId, action }
        console.log(employee);
    }

    const CancelEmployee = (e) => {
        console.log("Cancelado")
    }

    return (
        <div className={styles.body}>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Inserir funcionário</h3>
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

                                <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Salvar</button>
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