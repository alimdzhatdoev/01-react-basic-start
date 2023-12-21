import { ways } from "../data";
import LiBlock from "./LiBlock";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <LiBlock key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
