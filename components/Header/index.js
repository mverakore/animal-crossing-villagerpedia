import styled from "styled-components";
import { Icon } from "../ProfileCard";

const MainTitle = styled.h1`
font-size: 3rem;
font-weight: 700;
`

const TitleCont = styled.div`
display: flex;
gap: 0.5rem;
flex-direction: column;
width: 100%;
background-image: url("/circleBg.png");
height: 250px;
align-items: center;
justify-content: center;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
margin-bottom: 5rem;
`

const Text = styled.p`
font-size: 1.5rem;
`

const Logo = styled(Icon)`
padding: 0.5rem;
`

export function Header() {
    return (
        <>
        <TitleCont>
            <MainTitle>Villagers of New Horizon</MainTitle>
            <Text>Check out all the villagers!</Text>
            <Logo src="/goldenLeaf.svg"></Logo>
        </TitleCont>
        </>
    )
}