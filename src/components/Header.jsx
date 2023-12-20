import { useState } from "react";
import logo from "/logo-name.svg";
import vite from "/vite.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => {
    setNow(new Date())
  }, 1000)

  return (
    <header>
      <div className="headerLogo">
        <img src={logo} alt="" />
        <img src={vite} alt="" />
      </div>

      <span>Сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
