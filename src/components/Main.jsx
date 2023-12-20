import { ways, differences } from "../data";
import LiBlock from "./LiBlock";
import Button from "./Button/Button";
import { useState } from "react";

export default function Header() {
  let [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <main>
      <div className="main_block">
        <h1>Hello React!</h1>

        <section>
          <ul>
            {ways.map(way => <LiBlock key={way.title} {...way} />)}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType === 'way'} onClick={() => handleClick("way")}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Концентрация</Button>

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </div>
    </main>
  );
}
