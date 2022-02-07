import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #f8f8fb;
    display: flex;
    min-height: 100vh;
`

export const Container = styled.div`
    background-color: #f8f8fb;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 auto;
    padding: 3rem 0;
    width: min(75%, 900px);
`

export const Heading = styled.p`
    align-items: center;
    background-color: rgba(236, 67, 99);
    border-radius: 100px;
    color: white;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    letter-spacing: 4px;
    margin: 0 auto;
    min-width: 300px;
    padding: 0.8rem 3.5rem;
    text-transform: uppercase;
    width: fit-content;
`