import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css"

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <div>
                <Input
                    type="number"
                    text="Valor investido"
                    name="budget"
                    placeholder="Insira o valor investido"
                />
            </div>
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm;