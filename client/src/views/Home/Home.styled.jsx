import styled from "styled-components";

export const VIDEO_STYLE = {
    backgroundColor: 'black',
    minHeight: '100%',
    minWidth: '100vw',
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    left: '0',
}

export const Container = styled.div`
  background-color: black;
`

export const Canvas = styled.img`
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
`