import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css); .notosanskr * { font-family: 'Noto Sans KR', sans-serif; }
  @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);


  /* App */

  body {
    font-family: 'Noto Sans KR';
    background-color: ${props => props.theme.mode === 'dark' ? '#303030' : '#f0f0f0'};
    color: ${props => props.theme.mode === 'dark' ? '#f0f0f0' : '#000'};
  }


  /* TangerineTemplate */

  #header {
    font-family: 'Noto Sans KR';
    font-weight: 600;
    background-color: ${props => props.theme.mode === 'dark' ? '#212121' : 'orange'};
    color: ${props => props.theme.mode === 'dark' ? '#f0f0f0' : '#000'};
    width: 100%;
    top: 0;
    left: 0;
    font-size: 2rem;
    position: fixed;
    padding: 1rem;
  }


  /* Loader */

  #loader {
    position: fixed;
    top: 1.7rem;
    right: 0.7rem;
  }
  
  label {
    font-size: inherit;
    font-weight: 500;
    line-height: normal;
    background-color: #fdfdfd;
    cursor: pointer;
    border-bottom-color: #e2e2e2;
    border-radius: 0.3rem;
    padding: 1em 2em;
    color: #111;
    box-shadow: #111 0 0px 0px 2px inset;
  
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  }
  
  label:hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgba(1, 1, 1, 0.9) 0 80px 0px 2px inset;
  }
  
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }


  /* Displayer */

  #displayer {
    width: 100%;
    margin-top: 5rem;
    left: 0;
    font-family: 'Nanum Myeongjo';
    font-size: 1.2rem;
  }
  
  #title {
    font-family: 'Noto Sans KR';
    color: rgba(255, 255, 255, 0.85);
    background: #111;
    position: fixed;
    top: 0.5rem;
    left: 40%;
    right: 40%;
    text-align: center;
    max-width: 20%;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
  }
  
  #text-area {
    left: 0;
    top: 0;
    padding: 1rem;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  #text-area span {
    width: 100%;
    padding: 2rem;
    padding: 1.5rem;
  }
`;

export default GlobalStyle;