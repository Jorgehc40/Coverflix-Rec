import { Link } from "react-router-dom";
import { MovieStyle } from "./styles";

const Filme = ({ id, capa, nome }) => {
    return (
        <MovieStyle>
            <Link title={nome} to={`/filme/${id}`}>              
                <img alt={nome} src={capa}/>
            </Link>
            <h1>{nome}</h1>
        </MovieStyle>  
    );
}

export default Filme;