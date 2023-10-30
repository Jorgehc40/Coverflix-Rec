import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoviePageContainer, Image, Infos, Header } from './styles';
import Loading from '../../components/Loading';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import { FooterComponent } from "../../components/footer/FooterComponent.jsx";

const Filme = () => {
    const [filme, setFilme] = React.useState({});
    const [carregando, setCarregando] = React.useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    const obterFilme = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {"Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGM4ODlhZWM2ZDkxNmU0NzIxZjQ5ZDllNDgwNTI3NyIsInN1YiI6IjY0ZTdjOTcyNTk0Yzk0MDBlMjVmNDk2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ou0PruLVIpuHiDestuTPf_gHL3gU9Y8oi94232PkUKk"}
            });
           
            setFilme(data);
        } catch (error) {    

        } finally {
            setCarregando(false)
        }
    }

    React.useEffect(() => {
        obterFilme();
    }, [])

    const formatarLista = (lista) => {
        return lista.map((item, index) => {                       
            if (lista.length === index + 1) {
                return (
                    <span>{item.name}.</span>
                )
            }

            return (
                <span>{item.name},</span>
            )
        })
    }

    const handleBack = () => {
        navigate(-1);
    }

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: "#ccc",
            color: "#111"
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const pegarImagensProdutoras = () => {
        return filme.production_companies.map(company => {
            if (!company.logo_path) {
                return (
                    <Avatar title={company.name} {...stringAvatar(company.name)} />
                )
            }

            return (
                <img 
                    title={company.name} 
                    alt={company.name} 
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`} 
                />
            )                                
        })
    }

    if (carregando) {
        return (<Loading />)
    }

    return (
        <div className="bg-black container">        
            <div className="content">   
                <Header>
                    <div className="botao-voltar" onClick={handleBack}>
                        <FiArrowLeft size={30}/>
                        <span>VOLTAR</span>
                    </div>
                </Header>
                <MoviePageContainer>
                    <Image>
                        <img 
                            title={filme.original_title} 
                            alt={filme.original_title} 
                            src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} 
                        />
                    </Image>
                    <Infos>
                        <h1>Filme: {filme.original_title}</h1>
                        <hr />
                        <p><strong>Genêros:</strong> {formatarLista(filme.genres)}</p>
                        <p><strong>Produtores Países: </strong> {formatarLista(filme.production_countries)}</p>
                        <p><strong>Linguas:</strong> {formatarLista(filme.spoken_languages)}</p>
                        <p><strong>Descrição:</strong> {filme.overview}</p>    
                        <p><strong>Produtores:</strong></p>
                        <div className="produtores">
                            {pegarImagensProdutoras()}
                        </div>               
                    </Infos>                  
                </MoviePageContainer>  
                <FooterComponent/>         
            </div>        
        </div>        
    )   
}

export default Filme;