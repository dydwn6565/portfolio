import React from 'react'
import styled from "styled-components";

    const HeaderConainer = styled.div`
      width: 100%;
      height: 90px;
      background-color: #333;
      position: absolute;
    `;
function Header() {

  return (
    <div>
        <HeaderConainer>
            <div></div>
        </HeaderConainer>
      
    </div>
  )
}

export default Header
