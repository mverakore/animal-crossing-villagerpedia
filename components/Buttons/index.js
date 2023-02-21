import styled from "styled-components";

const Cont = styled.div`
display: flex;
width: 100%;
justify-content: flex-start;
align-items: center;
padding: 0rem 6.5rem;
@media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0rem 2.5rem;
}
@media (min-width: 600px) and (max-width: 1024px) {
    padding: 0rem 5rem;
}
@media (max-width: 600px) {
    padding: 0rem 1rem;
}
`

const FilterCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFDF8B;
width: 200px;
padding: 0.5rem;
height: 60px;
border-radius: 30px;
`

const LeftArrow = styled.img`
width: 45px;
height: 45px;
`

const BackArrow = styled(LeftArrow)`
@media (max-width: 600px) {
    width: 30px;
    height: 30px;
}
`

const RightArrow = styled.img`
width: 45px;
height: 45px;
`

const ButtonCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FFDF8B;
width: 150px;
padding: 1rem;
padding-right: 2rem;
height: 60px;
align-self: flex-start;
border-radius: 30px;
&:hover {
    background-color: #FFCB45;
}
@media (min-width: 1024px) and (max-width: 1920px) {
    margin-bottom: 2rem;
    width: 200px;
    height: 80px;
}
@media (min-width: 600px) and (max-width: 1024px) {
    margin-bottom: 2rem;
}
@media(max-width: 600px) {
    width: fit-content;
    margin-bottom: 1rem;
    padding-right: 1rem;
}
`
const Back = styled.p`
@media (min-width: 1024px) and (max-width: 1920px) {
    font-size: 2rem;
}
@media(max-width: 600px) {  
    display: none;
}
`

export function FilterButton({ type='', 
onLeft = () => {}, 
onRight = () => {},

}) 
{
    return (
    <Cont className='filter-button'>
        <FilterCont>
            <LeftArrow src="/leftArrow.png" onClick={()=>onLeft()}/>
            <p>{type}</p>
            <RightArrow src="/rightArrow.png" onClick={()=>onRight()}></RightArrow>
        </FilterCont>
    </Cont>
    )
}

export function BackButton({onBack = () => {}}) {
    return (
        <ButtonCont className='backbutton' onClick={()=>onBack()} >
            <BackArrow src="/leftArrow.png"/>
            <Back className='back'>Back</Back>
        </ButtonCont>
    )
}