import { TbError404 } from 'react-icons/tb';
import { VscError } from 'react-icons/vsc';
import { Container, Message } from './styles';
import { useParams } from 'react-router-dom/dist';

const Error = (parametro) => {
    let mensagem;

    const { code } = useParams();
    const code_error = parseInt(parametro.codigoDeErro || code);

    switch (code_error) {
        case 404: 
            mensagem = (
                <>
                    <TbError404 size={200}/>
                    <p style={Message}>Página não encontrada</p>
                </>                
            );
            break;
        case 401:
            mensagem = (
                <>
                    <VscError color="#c0392b" size={200}/>
                    <p style={Message}>Acesso negado!</p>
                </>                
            );
            break;        
        default:
            mensagem = (
                <>
                    <VscError color="#c0392b" size={200}/>
                    <p style={Message}>Erro desconhecido!</p>
                </>                
            );
    }    

    return (
        <div style={Container}>
            {mensagem}
        </div>
    );
}

export default Error;