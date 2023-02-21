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
@media (min-width: 600px) and (max-width: 1024px) {
    width: 600px;
    height: 350px;
    }
@media (max-width: 600px) {
    width: 300px;
    height: 350px;
    flex-direction: column;
    }
`

const CardImg = styled.img`
width: 300px;
height: 375px;
border-radius: 30px;
display: flex;
margin: 2rem;
object-fit: cover;
@media (min-width: 600px) and (max-width: 1024px) {
    width: 200px;
    height: 250px;
}
@media (max-width: 600px) {
    width: 140px;
    height: 150px;
    margin: 0.5rem;
}
`

const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
@media (min-width: 600px) and (max-width: 1024px) {
    gap: 0.5rem;
}
@media (max-width: 600px) {
    gap: 0.25rem;
}
`
const CardText = styled.p`
font-size: 1.5rem;
color: #493A10;
line-height: 1.5rem;
@media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1rem;
}
@media (max-width: 600px) {
    line-height: 0.5rem;
    font-size: 0.75rem;
}
`
const CardTitle = styled.h1`
font-size: 2rem;
color: #493A10;
display: flex;
align-items: center;
@media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1.5rem;
} 
@media (max-width: 600px) {
    font-size: 1rem;
}
`

export const Icon = styled.img`
width: 50px;
height: 50px;
margin-left: 1rem;
@media (max-width: 600px) {
    width: 30px;
    height: 30px;
}
`



export function ProfileCard({
title='hi', 
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
        <CardTitle className='maintitle'>{title}'s Profile</CardTitle>
        <CardBox id='profile'>
            <CardImg src={image} className='profile-image'/>
            <CardInfo>
                <CardTitle className='title'>{title}
                <Icon className='icon' src={icon}></Icon>
                </CardTitle>
                <CardText className='personality'>Personality: {personality}</CardText>
                <CardText className='hobby'>Hobby: {hobby}</CardText>
                <CardText className='species'>Species: {species}</CardText>
                <CardText className='bday'>Bday: {birthday}</CardText>
                <CardText className='song'>Favorite Song: {song}</CardText>
                <CardText className='catchphrase'>Catchphrase: "{catchphrase}"</CardText>
            </CardInfo>
        </CardBox>
        </>
    )
}