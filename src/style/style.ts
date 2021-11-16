import styled, { createGlobalStyle } from 'styled-components';
import { mainBackground } from '../media';

export const MainComponent = styled.div`
    height: 100vh;
    background-color: #0A4A58;
    background-image: url(${mainBackground});

    & .Title{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);

        font-family: 'Sniglet', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 90px;
        text-align: center;
        color: #E0E0E0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .Desctiption{
            font-family: 'Courier Prime', monospace;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 27px;
            text-align: center;

            color: #E0E0E0;
            -webkit-text-stroke: 1px black;
        }

        button{
            border: none;
            margin-left: auto;
            margin-right: auto;
            margin-top: 87px;
            width: 270px;
            height: 90px;
            font-size: 35px;
            background-color: #444444;
            color: white;
            border-radius: 20px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            img{
                margin-left: 25px;
            }
        }
    }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');
    body {
        width: 100%;
        height: 100%;
    }
`;