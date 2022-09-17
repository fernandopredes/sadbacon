import styles from "./About.module.css";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className={styles.about}>
      <h2>Sobre o Sad Bacon</h2>
      <p>Projeto realizado baseado no curso de React do Hora de Codar.</p>
      <p>Foi utilizado React no Front-end e Firebase para o back-end.</p>
      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About
