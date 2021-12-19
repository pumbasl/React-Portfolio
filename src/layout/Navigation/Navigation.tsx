import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import { Container } from './style';
//

//icons 
import { aboutMeIcon, contactIcon, homeIcon, portfolioIcon, skillIcon } from '../../media';
//

export default function NavigationBar(){
    const navigate = useNavigate();

    const handleClick = (id: Number) => {
        switch (id) {
            case 1:
                navigate('/full');
                break;
        
            case 2:
                navigate('aboutme');
                break;

            case 3:
                navigate('skill');
                break;
            
            case 4:
                navigate('portfolio');
                break;
            
            case 5:
                navigate('contact');
                break;

            default:
                console.log('error');
                break;
        }
    };

    return(
        <Container>  
            <div className='button-redirect' onClick={() => handleClick(1)}>
                <img src={homeIcon} alt="homeIcon" />
            </div>

            <div className='button-redirect' onClick={() => handleClick(2)}>
                <img src={aboutMeIcon} alt="aboutIcon" />
            </div>

            <div className='button-redirect' onClick={() => handleClick(3)}>
                <img src={skillIcon} alt="skillIcon" />
            </div>

            <div className='button-redirect' onClick={() => handleClick(4)}>
                <img src={portfolioIcon} alt="portfolioIcon" />
            </div>

            <div className='button-redirect' onClick={() => handleClick(5)}>
                <img src={contactIcon} alt="contactIcon" />
            </div>
        </Container>
    );
}