import styled from 'styled-components';
import BackgroundImage from '../../img/BackgroundImage.png'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px; 
    margin-top: 10px;
`

export const MainConteiner = styled.div`
    min-height: 5vh;
    width: 100%;
    background-color:  #000;
    color: #fff;
    font-size: 15px;
    text-align: center;
`

export const Part1 = styled.div`
    height: 870px;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Part2 = styled.div`
    height:  80px;
    font-size: 40px;
    margin-top: 20px;
`
