import styled from 'styled-components'


export const Container = styled.div`

`

export const Box = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);
    display: -ms-grid;
    display: grid;
    margin: 20vh auto 50px;
    max-width: 90%;
    -ms-grid-columns: 1fr 2fr;
    grid-cap: 0px;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "sidebar main";
    overflow: hidden;
    padding: 0;
    width: 900px;
`
export const Sidebar = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: sidebar;
    display: -ms-grid;
    -ms-grid-columns: 1fr;
    -ms-grid-rows: 1fr auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "sidebar-content"
        "sidebar-footer";
    background-color: #23b2a4;
    color: #FFFFFF;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);
`

export const SidebarContent = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: sidebar-content;
`

export const SidebarFooter = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    grid-area: sidebar-footer;
`

export const LogoContainer = styled.div`
    text-align: left;
    margin: 0;
`

export const Logo = styled.img`
    width: 150px;
    height: 75px;
`

export const Button = styled.button`
    display: inline-block;
    font-size: 1.2em;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    margin: 3rem 0 2rem 0;
    background-color: #23b2a4;
    padding: 10px;
    min-width: 173px;
    cursor: pointer;
    text-decoration: none;
    &.login-btn {
        display: block;
        margin: 2rem auto;
    }
`

export const Main = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: main;
    color: #666666;
    text-align: center;
`

export const MainTitle = styled.h1`
    color: #23b2a4;
    font-weight: 900;
    letter-spacing: 2px;
    margin: 1rem;
`

export const Input = styled.input`
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 1rem 2rem;
    width: 400px;
`