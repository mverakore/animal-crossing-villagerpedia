import styled from "styled-components";

const CardBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem;
`

const Cont = styled.div`
display: flex;
width: 200px;
height: 300px;
border-radius: 30px;
align-items: center;
background-color: #F2F2F2;
margin-bottom: 0.5rem; 
`

const CardImg = styled.img`
width: 100%;
border-radius: 30px;
height: 100%;
object-fit: cover;
&:hover {
    border: 5px solid #FFBE5B;
    cursor: pointer;
   }
`
const StyledName = styled.p`
background-color: #FFEEA0;
padding: 0.5rem;
border-radius: 30px;
`

export function Cards({ src , name='Name', onView = () => {}}) {
    return (
        <CardBox onClick={()=>onView()}>
            <Cont>
                <CardImg src={src} />
            </Cont>
            <StyledName>{name}</StyledName>
        </CardBox>
    )
}