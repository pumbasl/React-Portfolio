import { useNavigate } from 'react-router-dom';
import { Arrow } from "../../media";
import { MainComponent } from "./style";

export default function Home(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('full');
    };

    return(
        <MainComponent>
            <div className="container">
                <div className="title">
                    HELLO <br />
                    WELCOME TO MY WORLD
                </div>

                <div className="desctiption">
                    I hope you like the world that I have created, <br /> 
                    thank you. Have a better day
                </div>

                <div className="actionButton">
                    <button onClick={handleClick}>
                        LETS GO
                        <img src={Arrow} alt="Arrow" />
                    </button>
                </div>
            </div>

        </MainComponent>
    );
}