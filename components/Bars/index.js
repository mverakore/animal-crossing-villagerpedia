import styled from "styled-components";

const HeaderCont = styled.div`
display: flex;
width: 100%;
background-image: url("/headerBar.png");
height: 100px;
background-size: contain;
background-color: #FFFBE7;
@media (min-width: 600px) and (max-width: 1024px) {
    height: 80px;
  }
@media (max-width: 600px) {
    height: 40px;
}
`

const FooterCont = styled(HeaderCont)`

background-image: url("/footerbar.png");
`

export function HeaderBar({id}) {
    return (
        <HeaderCont id={id}>
        </HeaderCont>
    )
}

export function FooterBar() {
    return (
        <FooterCont>
        </FooterCont>
    )
}