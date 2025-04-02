import facebook from "../../assets/facebook.png"
import twiter from "../../assets/Twitter.png"
import youtub from "../../assets/youtube.png"
import linkdin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import S from "../Footer/footer.module.scss"

export default function footer(){
    return(
        <footer className={S.boxFooter}>
            <section className={S.boxContatos}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="">
                        <img src={twiter} alt="" />
                    </a>
                    <a href="">
                        <img src={youtub} alt="" />
                    </a>
                    <a href="">
                        <img src={linkdin} alt="" />
                    </a>
                    <a href="">
                        <img src={instagram} alt="" />
                    </a>
                </nav>
            </section>
            <section className={S.direitosReservados}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}