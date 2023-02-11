import styled from "styled-components";

const CardBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
height: 450px;
margin: 2rem;
width: 800px;
background-color: #FFF0C9;
border: 5px solid #FFC85C;
border-radius: 30px;
`

const CardImg = styled.img`
width: 300px;
height: 375px;
border-radius: 30px;
display: flex;
margin: 2rem;
object-fit: cover;
`

const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
`
const CardText = styled.p`
font-size: 1.5rem;
color: #493A10;
line-height: 1.5rem;
`
const CardTitle = styled.h1`
font-size: 2rem;
color: #493A10;
display: flex;
align-items: center;
`

export const Icon = styled.img`
width: 50px;
height: 50px;
margin-left: 1rem;
`


export function ProfileCard({title='hi', 
personality,
species, 
birthday, 
catchphrase, 
image, 
song, 
icon, 
hobby}) 
{
    return (
        <>
        <CardTitle>{title}'s Profile</CardTitle>
        <CardBox>
            <CardImg src={image}/>
            <CardInfo>
                <CardTitle>{title}
                <Icon src={icon}></Icon>
                </CardTitle>
                <CardText>Personality: {personality}</CardText>
                <CardText>Hobby: {hobby}</CardText>
                <CardText>Species: {species}</CardText>
                <CardText>Bday: {birthday}</CardText>
                <CardText>Favorite Song: {song}</CardText>
                <CardText>Catchphrase: "{catchphrase}"</CardText>
            </CardInfo>
        </CardBox>
        </>
    )
}