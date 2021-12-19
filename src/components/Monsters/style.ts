import styled from "styled-components";
import { monsters } from "../../media";

export const ImageMonster = styled.div`
    position: fixed;
    width: 464px;
    height: 225px;
    right: 0;
    bottom: 0;
    background-image: url(${monsters});
`;