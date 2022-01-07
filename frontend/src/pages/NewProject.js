import ProjectForm from '../components/project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto e administre seus gastos</p>
            <ProjectForm />
        </div>
    )

}

export default NewProject