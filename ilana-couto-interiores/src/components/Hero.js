import "../styles/hero.css";
import Carousel from "react-bootstrap/Carousel";
import projCombo from "../images/projetoCombo.jpg";

const heroData = [
  {
    title: "photo1",
    source: projCombo,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "photo2",
    source: projCombo,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "photo2",
    source: projCombo,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero, index) => (
          <Carousel.Item key={index}>
            <img src={hero.source} className="d-block w-100" alt={hero.title} />
            <Carousel.Caption>
              <p>{hero.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
