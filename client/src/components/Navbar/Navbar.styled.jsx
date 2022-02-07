import styled from "styled-components";

export const MATERIAL_STYLE = {
    position: "absolute",
    top: "0",
    width: "1rem",
}

export const Nav = styled.div`
    background-color: #23b2a4;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.1);
    /* height: calc(100vh - 70px); */
    height: 100%;
    padding: 20px 10px 20px 15px;
    position: fixed;
    /* top: 70px; */
    top: 0px;
    width: 100px;
`

export const List = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    list-style: none;
    & > .link {
        color: inherit;
        text-decoration: none;
    }
`

export const SVG = styled.img`
    filter: invert(100%);
    object-fit: cover;
    width: 50%;
    transition: all 0.3s ease-in-out 0s;
`

export const Item = styled.li`
    align-items: center;
	border-radius: 12px;
    cursor: pointer;
	display: flex;
	font-size: 0.875rem;
	font-weight: 700;
	height: 48px;
    justify-content: center;
	line-height: 48px;
	position: relative;
    width: 48px;
	transition: all .3s ease-in-out;
    & .tooltip {
        background-color: rgba(236, 67, 99);
        border-radius: 200px;
        color: #fff;
        font-size: 0.65rem;
        font-weight: 100;
        letter-spacing: 1px;
        line-height: 24px;
        opacity: 0;
        position: absolute;
        left: calc(100% + 10px);
        top: 25%;
        visibility: hidden;
        text-transform: uppercase;
        transform: translate(10px);
        white-space: nowrap;
        z-index: 999;
        transition: all 0.3s ease-in-out 0s;
        padding: 1px 16px;
        & > .ml-25 {
            margin-left: 25px;
        }
    }
    &:hover {
        & ${SVG} {
            transform: scale(1.2);
            transition: all .4s ease-in-out;
        }
        & .tooltip {
            opacity: 1;
            visibility: visible;
            transform: translate(0);
        }
    }
    &.default-cursor {
        cursor: default;
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    height: 40px;
    object-fit: cover !important;
    width: 40px;
`

export const Logo = styled.img`
    object-fit: cover !important;
    width: 35px;
`

export const HR = styled.hr`
    color: #ffffff;
    opacity: 0.3;
    margin-bottom: 15px;
    width: 45px;
`
