import styled from "styled-components";

const FilterCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFDF8B;
width: 200px;
padding: 0.5rem;
height: 60px;
align-self: flex-start;
border-radius: 30px;
margin-left: 3rem;
`

const LeftArrow = styled.img`
width: 45px;
height: 45px;
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
`

export function FilterButton({ type='', 
onLeft = () => {}, 
onRight = () => {}
}) 
{
    return (
        <FilterCont>
            <LeftArrow src="/leftArrow.png" onClick={()=>onLeft()}/>
            <p>{type}</p>
            <RightArrow src="/rightArrow.png" onClick={()=>onRight()}></RightArrow>
        </FilterCont>
    )
}

export function BackButton({onBack = () => {}}) {
    return (
        <ButtonCont onClick={()=>onBack()} >
            <LeftArrow src="/leftArrow.png"/>
            <p>Back</p>
        </ButtonCont>
    )
}