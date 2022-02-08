import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    color: black;
    margin: auto;
    width: 50%;
`

export const Wrapper = styled.div`
    padding: 10px 10px 20px 10px;
`

export const Top = styled.div`
    display: flex;
    & > input {
        padding: 1rem 3rem 0 3rem;
        border: none;
        width: 80%;
        &:focus {
            outline: none;
        }
    }
`

export const HR = styled.hr`
    margin: 20px;
    opacity: 0.3;
`

export const Bottom = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Options = styled.div`
    align-items: center;
    display: flex;
`

export const Option = styled.label`
    align-items: center;
    cursor: pointer;
    display: flex;
    margin-left: 20px;
    margin-right: 15px;
    & > input {
        display: none;
    }
`

export const SVG = styled.img`
    cursor: pointer;
    width: 40px;
    filter: invert(55%) sepia(36%) saturate(815%) hue-rotate(125deg) brightness(99%) contrast(89%);
    transition: all 0.3s;
    &:hover {
        transform: scale(1.2);
    }
`

export const Button = styled.button`
    background-color: rgba(60, 60, 60, 1);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 1px;
    margin-right: 20px;
    padding: 7px;
    text-transform: uppercase;
`