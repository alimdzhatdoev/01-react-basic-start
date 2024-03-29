import { useState } from "react";
import logo from "/logo-name.svg";
// import "./Header.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => {
    setNow(new Date());
  }, 1000);

  return (
    <HeaderContainer>
      <div className="headerLogo">
        <img src={logo} alt="" />
      </div>

      <span>Сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
