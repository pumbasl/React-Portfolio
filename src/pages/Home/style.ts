import styled from 'styled-components';
import { mainBackground, mainBackgroundMobile } from '../../media';

export const MainComponent = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0A4A58;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${mainBackground});

    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);

        .title{
            font-family: 'Sniglet', cursive;
            font-style: normal;
            font-weight: normal;
            font-size: 72px;
            line-height: 90px;
            text-align: center;
            color: #E0E0E0;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .desctiption{
            font-family: 'Courier Prime', monospace;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 27px;
            text-align: center;

            color: #E0E0E0;
            -webkit-text-stroke: 1px black;
        }

        .actionButton{
            text-align: center;
            button{
                font-family: 'Itim', cursive;
                font-style: normal;
                font-weight: normal;
                font-size: 35px;
                line-height: 42px;
                cursor: pointer;
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
                filter: drop-shadow(0px 6px 6px rgb(0, 0, 0));
    
                img{
                    margin-left: 25px;
                }
            }
        }
    }

    @media (min-width: 320px) and (max-width: 420px){
        background-image: url(${mainBackgroundMobile});
        .container{
            .title{
                font-size: 50px;
            }
        }
    }
`;