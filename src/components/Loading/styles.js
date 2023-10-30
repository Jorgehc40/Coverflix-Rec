import styled from 'styled-components';

export const LoadingStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);

    .spinner {
        animation: spin 1s infinite ease-in-out; 
        //  animation: dash 2s infinite ease-in-out; 
        border-radius: 50%;
        border-top: 2px solid #fff;
        display: inline-block;
        height: 2em;
        margin: calc(50vh - 1em) calc(50vw - 1em);
        width: 2em;
    }

    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg); 
            -o-transform: rotate(360deg); 
            transform: rotate(360deg); 
        }
    }

    @keyframes dash {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;