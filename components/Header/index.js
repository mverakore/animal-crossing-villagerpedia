import styled from "styled-components";
import { Icon } from "../ProfileCard";

const MainTitle = styled.h1`
font-size: 3rem;
font-weight: 700;
text-align: center;
@media (min-width: 600px) and (max-width: 1024px) {
    font-size: 2rem;
    }
@media (max-width: 600px) {
    font-size: 1.5rem;
    }
`

const TitleCont = styled.div`
display: flex;
flex-wrap: wrap;
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
@media (min-width: 600px) and (max-width: 1024px) {
    height: 200px;
}
@media (max-width: 600px) {
    background-size: 220px 150px;
    margin-bottom: 2rem;
}
`

const Text = styled.p`
font-size: 1.5rem;
text-align: center;
@media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1.2rem;
    }
 @media (max-width: 600px) {
        font-size: 1rem;
        }
`

const Logo = styled(Icon)`
@media (max-width: 600px) {
    width: 35px;
    }
`

export function Header() {
    return (
        <>
            <TitleCont>
                <Logo src="/goldenLeaf.svg"></Logo>
                <MainTitle className='title'>Animal Crossing Villagerpedia</MainTitle>
                <Text className='tagline'>Check out all the villagers based on their personality!</Text>
            </TitleCont>
        </>
    )
}