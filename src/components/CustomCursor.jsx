// CustomCursor.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: grey;
  position: fixed;
  border-radius: 50%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width:500px){
    display:none
  }
`;

const CursorOutline = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid grey;
  position: fixed;
  border-radius: 50%;
  z-index: 3;
  pointer-events: none;
  
  @media screen and (max-width:500px){
    display:none
  }
`;

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      setDotPosition({ x: posX, y: posY });

      setTimeout(() => {
        // Set the dot position to be at the center of the outline
        setOutlinePosition({ x: posX - 36, y: posY - 36 });
      }, 100);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <CursorDot style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }} />
      <CursorOutline style={{ left: `${outlinePosition.x}px`, top: `${outlinePosition.y}px` }} />
    </>
  );
};

export default CustomCursor;
