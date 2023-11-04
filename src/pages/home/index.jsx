import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Filme from "../../components/Filme";
import { Container } from './styles'
import Loading from "../../components/Loading";
import { Button } from "@mui/material";
import axios from "axios";
import { MainConteiner, Part1, Part2 } from "../home/styles"
import { FooterComponent } from "../../components/footer/FooterComponent.jsx";

const Home = () => {
    const [filmes, setFilmes] = React.useState([]);
    const [carregando, setCarregando] = React.useState(true);

    const navigate = useNavigate();

    const obterFilmes = async () => {
        try {
            const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular", {
                headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM4ODlhZWM2ZDkxNmU0NzIxZjQ5ZDllNDgwNTI3NyIsInN1YiI6IjY0ZTdjOTcyNTk0Yzk0MDBlMjVmNDk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ou0PruLVIpuHiDeptTPf_gHL3gU9Y8oi94232PkUKk" }
            });

            setFilmes(data.results);
        } catch (error) {
            navigate(`/error/${error.request.status}`);
        } finally {
            setCarregando(false)
        }
    }

    React.useEffect(() => {
        obterFilmes();
    }, []);

    if (carregando) {
        return (<Loading />)
    }

    return (
        <MainConteiner>
            <Part1 />

            <Part2>
                <p>Filmes Populares</p>
            </Part2>
            <div className="bg-black container">
                <div className="content">
                    <Container>
                        {filmes.map((filme, index) => {
                            return (
                                <Filme
                                    key={index}
                                    capa={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                                    nome={filme.original_title}
                                    id={filme.id}
                                />
                            );
                        })}
                    </Container>
                </div>
                <FooterComponent />
            </div>
        </MainConteiner>

    );
}

export default Home;