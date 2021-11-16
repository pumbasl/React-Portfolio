import { Arrow } from "../../media";
import { MainComponent } from "../../style/style";

export default function Home(){
    return(
        <MainComponent>
            <div className="Title">
                HELLO <br />
                WELCOME TO MY WORLD

                <div className="Desctiption">
                    I hope you like the world that I have created, <br /> 
                    thank you. Have a better day
                </div>

                <button>
                    LETS GO
                    <img src={Arrow} alt="Arrow" />
                </button>
            </div>

        </MainComponent>
    );
}