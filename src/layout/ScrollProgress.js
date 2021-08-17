import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(209, 168, 73, .9) ${props => props.scroll},
    transparent  0);
  width:  100%;
  margin-left: -0.5em;
  height:  5px;
  z-index:  3;
`;

const ScrollProgress = () => {

  const [scrollPostion, setScrollPostion] = useState(0);

  

  const listenToScrollEvent = useCallback(
    () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset; // how much the user has scrolled by
          const winHeight = window.innerHeight;
          const docHeight = getDocHeight();
      
          const totalDocScrollLength = docHeight - winHeight;
          const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
      
          setScrollPostion(scrollPostion);
        });
      });
    },
    [],
  )

  

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  useEffect(() => {
    listenToScrollEvent()
  },[listenToScrollEvent]
  )
  
    return (
      <Progress scroll={scrollPostion + '%'} />
    )

  }

export default ScrollProgress;