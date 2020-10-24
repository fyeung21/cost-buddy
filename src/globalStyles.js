import styled from "styled-components";

export const theme = {
    headingFont: `"Comfortaa", cursive`,
    bodyFont: `"Roboto", sans-serif`,
    bodyFontColor: "#FFF",
    headingFontColor: "#FFF",
    primaryColor: "#FFF",
    buttonColor: "#50BDB4",
    h1FontSize: "3.5rem",
    h2FontSize: "2rem",
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
    padding: 0.5rem;
    width: 100px;
    margin: 1rem 0;
`
export const DeleteBtn = styled.div`
    background-color: #fff;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 3px solid ${theme.primaryColor};
    border-radius: 20px;
    padding: 0.5rem;
    width: 100px;
    margin: 1rem;
`