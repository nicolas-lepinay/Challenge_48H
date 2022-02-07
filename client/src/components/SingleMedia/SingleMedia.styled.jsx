import styled from "styled-components";


export const Container = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(245, 245, 245, 1);
    display: flex;
    /* height: 150px; */
    justify-content: space-between;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
`

export const Image = styled.img`
    object-fit: cover;
    height: 100px;
    width: 200px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`

export const Actions = styled.div`
    align-items: center;
    display: flex;
    gap: 3rem;
`

export const Icon = styled.img`
    cursor: pointer;
    height: 40px;
    margin-right: 1rem;
    opacity: 0.6;
    width: 40px;
`