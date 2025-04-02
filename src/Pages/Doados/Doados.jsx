import livroDoado from "../../assets/livroDoado.png"
import S from "../../Pages/Doados/doados.module.scss"
import axios from "axios"
import {useState, useEffect} from 'react'

export default function Doados(){
    const [livros,setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://api-vai-na-web.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros()
    },[])

    return(
        <section className={S.doadosPage}>
            <h3>Livros Doados</h3>
            <article className={S.areaDoados}>
                <img  src={livroDoado} alt="Livro Doado" id="imgPadrao"/>
                <p>
                O protagonista
                Susanne Andrade
                Ficção
                </p>

                {livros.map((item)=>(
                <article key={item.id}>
                    <img src={item.imagem_url} alt="" />
                    <h3>{item.titulo}</h3>
                    <p>{item.categoria}</p>
                    <p>{item.autor}</p>
                </article>
                    ))}
            </article>

        </section>
    )
}