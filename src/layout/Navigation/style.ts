import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 156px;
    height: 100%;
    background-color: rgba(99, 98, 98, 69%);
    
    .button-redirect{
        width: 70px;
        height: 70px;
        cursor: pointer;

        &:not(:last-child){
            margin-bottom: 40px;
        }
    }
`;