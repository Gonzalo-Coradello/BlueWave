import { useState } from "react";
import Header from "../../components/Header/Header";
import servicexd from "../../assets/images/service-icon-2.png";
import servicesData from "./servicesData";
import Footer from "../../components/Footer";

const Services = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedCardIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedCardIndex(null);
  };

  return (
    <>
      <Header />
      <section className="section service" id="service" aria-label="service">
        <div className="container">
          <h2 className="h1 section-title text-center mb-3">
            Ofrecemos los siguientes <span className="has-before">servicios</span>
          </h2>
          <ul className="grid-list">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`service-card ${expandedCardIndex === index ? "expanded" : ""}`}>
                  <div className="card-icon">
                    <img
                      src={servicexd}
                      width="30"
                      height="30"
                      loading="lazy"
                      alt="service icon"
                    />
                  </div>
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      {service.title}
                    </a>
                  </h3>
                  <p className="card-description">{service.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
