import styled from 'styled-components';
import BackgroundImage from '../../img/BackgroundImage.png'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px; 
    margin-top: 10px;
`

export const MainConteiner = styled.div`
    min-height: 100vh;
    background-color:  #000;
    color: #fff;
    font-size: 2vw;
`

export const Part1 = styled.div`
    height: 870px;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Part2 = styled.div`
    height:  10vh;
`
