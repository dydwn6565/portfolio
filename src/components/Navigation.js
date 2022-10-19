import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  width: 500px;
  height: 300px;
//   display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border: 1px solid white;
`;

function Navigation() {
  return (
    <div>
        <NavigationContainer>
s
        {/* Navigation */}
        </NavigationContainer>
        </div>
  )
}

export default Navigation