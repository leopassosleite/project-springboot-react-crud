import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../assets/img/XBarts.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            
                <Container>
                    <Link to="/"><img src={logo} alt="XBarts" /></Link>
                    <ul class={styles.list}>
                        <li class={styles.item}>
                            <Link to="/funcionarios">funcionários</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to="/projetos">projetos</Link>
                        </li>
                    </ul>
                </Container>
            </nav>

    )
}
export default NavBar