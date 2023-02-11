import styled from "styled-components";

const HeaderCont = styled.div`
display: flex;
width: 100%;
background-image: url("/headerBar.png");
height: 100px;
background-size: contain;
background-color: #FFFBE7;
`

const FooterCont = styled(HeaderCont)`
background-image: url("/footerBar.png");
`

export function HeaderBar() {
    return (
        <HeaderCont>
        </HeaderCont>
    )
}

export function FooterBar() {
    return (
        <FooterCont>
        </FooterCont>
    )
}