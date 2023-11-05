import styled from 'styled-components';
import { MainConteiner } from '../home/styles';

export const MoviePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 0;    

    @media(min-width: 740px) {
        flex-direction: row;
    }
`;

export const Image = styled.div`
    flex: 1;

    img {
        width: 100%;
    }
`;

export const Infos = styled.div`
    flex: 1;

    hr {
        margin: 20px 0;
        height: 1px;
        border: 0;
        background-color: #eee;
    }

    p {
        margin: 15px 0;
    }

    .produtores {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        background-color: #a1a1a1;
        padding: 20px;

        img {
            height: 50px;
        }
    }
`;

export const Header = styled.header`
    margin-top: 20px;

    .botao-voltar {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            margin-left: 10px;
        }
    }
`;

export const FooterComponent = styled.div`
    margin-top: 20px;
    padding: 20px 0;   
    text-align: center;
    font-size: 20px;
`