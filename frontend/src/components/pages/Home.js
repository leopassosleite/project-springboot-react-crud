import styles from './Home.module.css'
import savings from '../../assets/img/moeda.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a <span>XBCoin</span></h1>
            <p>Comece a gerenciar os seus projetos</p>
            <LinkButton to="/novo-projeto" text="Criar projeto" />
            <img src={savings} alt="XBCoin" />
        </section>
    )
}
export default Home