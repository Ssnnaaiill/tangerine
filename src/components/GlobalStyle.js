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

  .nodrag {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }


  /* Toggle Theme */

  #toggle-theme {
    position: fixed;
    top: 1.5rem;
    right: 10rem;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    vertical-align:middle;
  }

  .switch input {display:none;}

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #111;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
   
  input:checked + .slider {
    background-color: orange;
  }
   
  input:focus + .slider {
    box-shadow: 0 0 1px orange;
  }
   
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }
   
  .slider.round:before {
    border-radius: 50%;
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
  
  #file-load-label {
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
  
  #file-load-label:hover {
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
    left: 40%;
    right: auto;
    top: 0.5rem;
    text-align: center;
    min-width: 20%;
    max-width: 60%;
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