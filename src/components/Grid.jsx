import styled from "styled-components";

const Grid = styled.div`
    width: 100%;
    height: 100vh;
    background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%),
        radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%),
        radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%),
        radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%),
        radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%),
        radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%),
        radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%),
        linear-gradient(to right, #24243e, #302b63, #0f0c29);
    cursor : none;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100vh;
        background: black;
        opacity: .92;
    }

    @media screen and (max-width : 540px){
        cursor: default
    }
`;

export default Grid ;