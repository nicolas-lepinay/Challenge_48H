import styled from "styled-components";


export const Container = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(240, 240, 240, 1);
    display: flex;
    /* height: 150px; */
    justify-content: space-between;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    &.broadcast {
        border: 1px solid #6aa84f;
    }
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
    & .wrapper {
        position: relative;
        & > .tooltip {
            background-color: rgba(50, 50, 50, 1);
            border-radius: 200px;
            color: #fff;
            font-size: 0.65rem;
            font-weight: 100;
            letter-spacing: 1px;
            line-height: 24px;
            opacity: 0;
            position: absolute;
            left: -50px;
            bottom: -30px;
            visibility: hidden;
            text-transform: uppercase;
            transform: translate(10px);
            white-space: nowrap;
            z-index: 999;
            transition: all 0.3s ease-in-out 0s;
            padding: 1px 16px;
        }
        &:hover {
            & > .tooltip {
                opacity: 1;
                visibility: visible;
                transform: translate(0);
            }
        }
    }
`

export const Icon = styled.img`
    cursor: pointer;
    height: 30px;
    margin-right: 1rem;
    opacity: 0.3;
    width: 30px;
    &.broadcast {
        opacity: 1;
        filter: invert(55%) sepia(65%) saturate(364%) hue-rotate(57deg) brightness(96%) contrast(83%);
    }
`