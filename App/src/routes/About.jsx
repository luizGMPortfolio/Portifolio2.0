import "./About.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [ExitLeft, setExitLeft] = useState(false);
  const [ExitRight, setExitRight] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [Page, setPage] = useState();
  const draggableRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = draggableRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.clientX - offset.current.x;
    const y = e.clientY - offset.current.y;

    setPosition({ x, y });

    if (x < 300) {
      // Condição para executar função
      triggerFunctionLeft();
    } else if (x > 600) {
      triggerFunctionRight();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setPosition({ x: 500, y: 0 });
  };

  const triggerFunctionLeft = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitLeft(true);
    setPage("/Skills");
    // Coloque aqui a função que deseja executar
  };

  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/Repository");
    // Coloque aqui a função que deseja executar
  };

  return (
    <div className="about">
      <Logo Type={"white"} />
      <Midias Type={"white"} />
      <div
        className={`container-text  ${ExitLeft ? "exitAnimationLeft" : ""} ${
          ExitRight ? "exitAnimationRight" : ""
        }`}
        ref={draggableRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onAnimationEnd={() => (Page ? navigate(Page) : "")}
        style={{ left: position.x }}
      >
        <Title title="Desenvolvedor Web    {" />
        <div className="InfoContainer">
          <span>
            <h2>Nome:</h2>
            <p>Luiz Gustavo Da Silva Moraes</p>
          </span>
          <span>
            <h2>Nacimento:</h2>
            <p>04/12/2000</p>
          </span>
          <span>
            <h2>Cursando:</h2>
            <p>Ciencia da computação</p>
          </span>
          <span>
            <h2>Foco:</h2>
            <p>Desinvolvimento front-end e desing</p>
          </span>
          <span className="invert">
            <h2>Resumo:</h2>
            <p>
              Programador Web criativo, com muito experiência teórica e prática.
              Disponho de conhecimento com foco em front-end e design, já
              executei trabalhos de desenvolvimento web como freelancer,
              utilizando React, nodejs e recursos firebase. Além disso, desejo
              continuar aprimorando minhas habilidades e me tornar capaz de
              desenvolver APIs web e Mobile de forma eficiente e em grande
              escala. Portanto, estou disposto a buscar qualificação
              profissional para me manter atualizado sobre o mercado de
              trabalho, de maneira que eu possa vir a possuir os atributos
              necessários para diversas situações.
            </p>
          </span>
        </div>
        <Title title="}" />
      </div>
      <div className="container-mobile">
        <Title title="Desenvolvedor Web    {" />
        <div className="InfoContainer">
          <span className="">
            <h2 className="font-20">Nome:</h2>
            <p className="font-10">Luiz Gustavo Da Silva Moraes</p>
          </span>
          <span>
            <h2 className="font-20">Nacimento:</h2>
            <p className="font-10">04/12/2000</p>
          </span>
          <span >
            <h2 className="font-20">Cursando:</h2>
            <p className="font-10">Ciencia da computação</p>
          </span>
          <span>
            <h2 className="font-20">Foco:</h2>
            <p className="font-10">Desinvolvimento front-end e desing</p>
          </span>
          <span className="invert">
            <h2 className="font-20">Resumo:</h2>
            <p className="font-10">
              Programador Web criativo, com muito experiência teórica e prática.
              Disponho de conhecimento com foco em front-end e design, já
              executei trabalhos de desenvolvimento web como freelancer,
              utilizando React, nodejs e recursos firebase. Além disso, desejo
              continuar aprimorando minhas habilidades e me tornar capaz de
              desenvolver APIs web e Mobile de forma eficiente e em grande
              escala. Portanto, estou disposto a buscar qualificação
              profissional para me manter atualizado sobre o mercado de
              trabalho, de maneira que eu possa vir a possuir os atributos
              necessários para diversas situações.
            </p>
          </span>
        </div>
        <Title title="}" />
      </div>
    </div>
  );
};
export default About;
