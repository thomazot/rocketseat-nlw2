import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/445330?s=460&v=4" alt="Thomaz Toyama"/>
                <div>
                    <strong>Thomaz Toyama</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Etusiasta das melhores tecnoligias de química avançada. <br /> <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pesssoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem