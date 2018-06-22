import React from "react";
import styled from "styled-components";

const Header = props => {
  const Title = styled.h3`
    text-align: center;
  `;
  return (
    <div>
      <Title>User list</Title>
    </div>
  );
};

export default Header;
