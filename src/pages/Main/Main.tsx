import React from 'react';

//styles
import { Container } from './style';
//

export default function Main(){
    return(
        <Container>
            <div className="title">
                HI, <br />
                I AM DENIS MASSON <br />
                WEBSITE DEVELOPER
            </div>

            <div className="description">
                Front End Developer / UI / IX Design
            </div>

            <div className="button">
                GET MY RESUME
            </div>
        </Container>
    )
}