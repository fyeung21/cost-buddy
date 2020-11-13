import styled from "styled-components";

export const theme = {
    headingFont: `"Comfortaa", cursive`,
    bodyFont: `"Roboto", sans-serif`,
    bodyFontColor: "#141414",
    headingFontColor: "#FFF",
    primaryColor: "#FFF",
    buttonColor: "#50BDB4",
    hoverColor: "#677BA0",
    h1FontSize: "3.5rem",
    h2FontSize: "2rem",
    bodyFontSize: "18px",
    skinnyWindowSize: "414px",
    tabletSize: "768px",
    smallLaptopSize: "1024px",
    desktopSize: "1200px",
}

export const MainCont = styled.div`
    width: 1000px;
    margin: 0 auto;
`
export const AddBtn = styled.div`
    background-color: #fff;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 3px solid ${theme.primaryColor};
    border-radius: 20px;
    padding: 1rem;
    width: 115px;
    margin: 1rem 2.25rem;
`
export const DeleteBtn = styled.div`
    background-color: #fff;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 3px solid ${theme.primaryColor};
    border-radius: 20px;
    padding: 0.5rem;
    margin: 0 0.5rem;
`
export const Txt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyFontColor};
    font-weight: 400;
    line-height: 22px;
`
export const InputTxt = styled.input`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyFontColor};
    font-weight: 400;
    line-height: 22px;
`
export const DollarSign = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyFontColor};
    font-weight: 400;
    line-height: 22px;
    margin: 0 0.25rem 0 0;
`