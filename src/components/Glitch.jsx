import styled from "styled-components";

const Glitch = styled.h1`
    font-size: 2.5rem;
    letter-spacing: 10px;
    padding: 10px 0px;
    font-weight: 700;
    position: relative;
    color : white;
    z-index: 1;
    text-transform: uppercase;
    text-shadow: 0.01em 0.01em 0 rgba(255,0,0,0.75), 
                 -0.01em -0.01em 0 rgba(0,255,0,0.75), 
                 0.02em 0.02em 0 rgba(0,0,255,0.75) ;
  
    animation: glitch 2000ms infinite;
  
  @keyframes glitch {
    0% {
        text-shadow: 0.02em 0.01em 0 rgba(255, 0, 0, 0.75),
                     -0.08em -0.1em 0 rgba(0, 255, 0, 0.75),
                     0.02em 0.02em 0 rgba(0, 0, 255, 0.75);
    }
    5% {
        text-shadow: 0.01em 0.02em 0 rgba(255, 0, 0, 0.75),
                     -0.1em -0.02em 0 rgba(0, 255, 0, 0.75),
                     0.03em 0.02em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
        text-shadow: 0.04em 0.04em 0 rgba(255, 0, 0, 0.75),
                     -0.12em -0.03em 0 rgba(0, 255, 0, 0.75),
                     0.15em 0.035em 0 rgba(0, 0, 255, 0.75);
    }
    30% {
        text-shadow: 0.01em 0.03em 0 rgba(255, 0, 0, 0.75),
                     -0.07em -0.1em 0 rgba(0, 255, 0, 0.75),
                     0.12em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    45% {
        text-shadow: 0.06em 0.08em 0 rgba(255, 0, 0, 0.75),
                     -0.09em -0.05em 0 rgba(0, 255, 0, 0.75),
                     0.07em 0.1em 0 rgba(0, 0, 255, 0.75);
    }
    60% {
        text-shadow: 0.11em 0.01em 0 rgba(255, 0, 0, 0.75),
                     -0.09em -0.07em 0 rgba(0, 255, 0, 0.75),
                     0.13em 0.13em 0 rgba(0, 0, 255, 0.75);
    }
    75% {
        text-shadow: 0.12em 0.06em 0 rgba(255, 0, 0, 0.75),
                     -0.1em -0.09em 0 rgba(0, 255, 0, 0.75),
                     0.08em 0.08em 0 rgba(0, 0, 255, 0.75);
    }
    80% {
        text-shadow: 0.1em 0.08em 0 rgba(255, 0, 0, 0.75),
                     -0.06em -0.12em 0 rgba(0, 255, 0, 0.75),
                     0.1em 0.06em 0 rgba(0, 0, 255, 0.75);
    }
    90% {
        text-shadow: 0.07em 0.01em 0 rgba(255, 0, 0, 0.75),
                     -0.11em -0.05em 0 rgba(0, 255, 0, 0.75),
                     0.09em 0.12em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
        text-shadow: 0.14em 0.03em 0 rgba(255, 0, 0, 0.75),
                     -0.05em -0.05em 0 rgba(0, 255, 0, 0.75),
                     0.12em 0.04em 0 rgba(0, 0, 255, 0.75);
    }
  }

` ;

export default Glitch