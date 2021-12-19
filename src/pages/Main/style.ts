import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 71px;
    height: 100%;
    color: white;

    .title{
        font-family: Sniglet;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 90px;
        letter-spacing: 0.02em;
    }

    .description{
        font-family: Courier Prime;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 27px;

        letter-spacing: 0.02em;

        margin-top: 53px;
    }

    .button{
        width: 268px;
        height: 90px;
        margin-top: 83px;
        text-align: center;

        background: #444444;
        box-shadow: 2px 6.4px 4px #1B1B1B;
        border-radius: 23px;

        font-family: Itim;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 36px;

        letter-spacing: 0.02em;

        color: #E0E0E0;
    }
`;