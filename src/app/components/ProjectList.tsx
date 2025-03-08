import Card from "./Card";
import { cards } from "../data/cards";

export default function ProjectList() {
  return (
    <section id="projects">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
}
