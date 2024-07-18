/* eslint-disable react-hooks/rules-of-hooks */
import "./Courses.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import React from "../assets/react.svg";
import Firebase from "../assets/firebase.png";
import gpt from "../assets/chatgpt.png";
import Senai from "../assets/Senai.png";

const courses = () => {
  const navigate = useNavigate();

  const [ExitLeft, setExitLeft] = useState(false);
  const [ExitRight, setExitRight] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableRef = useRef(null);
  const [Page, setPage] = useState();
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
    setPage("/Project");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/jorney");
    // Coloque aqui a função que deseja executar
  };

  return (
    <div className="courses">
      <Logo Type={"white"} />
      <Midias Type={"white"} />
      <div
        className={`container-text draggable ${
          ExitLeft ? "exitAnimationLeft" : ""
        } ${ExitRight ? "exitAnimationRight" : ""}`}
        ref={draggableRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onAnimationEnd={() => (Page ? navigate(Page) : "")}
        style={{ left: position.x }}
      >
        <Title title="Cursos   {" />
        <div className="InfoContainer">
          <li>
            <div>
              <a href="https://www.udemy.com/share/106ezS3@MNboApI4z3pjO6xOxcBqLaPi18yycNne8ACOU9Lk-_aOYoAP85azzSYn8huoQEB-YA==/">
                React do Zero a Maestria (c/ hooks, router, API, Projetos)
              </a>
              <h4>Udemy</h4>
              <span>
                <h5>Carga horária:</h5>30,5 horas
              </span>

              <p>
                Crie projetos completos com react, utilizando novas tecnologias
                em alta no mercado como firebase, nodeJs, mongoDB e mais!
              </p>
            </div>
            <div>
              <img src={React} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.udemy.com/share/103hBA3@InmQLbtS3HjrUX0c5TwyBu5sQIGNtWqOt1yq_-QArTZMWH6I6vDodDhFIMLLQBHtvw==/">
                Google Firebase na Prática e em Detalhes(Usando JavaScript)
              </a>
              <h4>Udemy</h4>
              <span>
                <h5>Carga horária:</h5>12 horas
              </span>
              <p>
                Aprenda os principais Recurso do firebase em um projetos Web
                didático.
              </p>
            </div>
            <div>
              <img src={Firebase} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.udemy.com/share/109Zi63@BckUQ3T9JO1AxnrlYomCPH5haXs9MePUYXWXZnoFZmlOPA3c23P7UQhZCRVqTPyomg==/">
                Certificação UX UI DESIGN FIGMA + inteligência Artificial
              </a>
              <h4>Udemy</h4>
              <span>
                <h5>Carga horária:</h5>20,5 horas
              </span>
              <p>
                Domine a criação de wireframes, mockups e protótipos
                profissionais para aplicações mobile/desktop apartir do zero,
                util.
              </p>
            </div>
            <div>
              <img src={gpt} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.senairs.org.br/cursos/cursos-de-evolucao-profissional/mecanica-de-manutencao">
                Mecânico de manutenção de maquinas industriais(Curso Técnico)
              </a>
              <h4>Senai</h4>
              <span>
                <h5>Carga horária:</h5>2000 horas
              </span>
              <p>
                voltado para a formação de profissionais capacitados a realizar
                a manutenção corretiva e preventiva em máquinas e equipamentos
                industriais.
              </p>
            </div>
            <div>
              <img src={Senai} alt="" />
            </div>
          </li>
        </div>
        <Title title={"}"} />
      </div>
      <div className="container-mobile">
        <Title title="Cursos   {" />
        <div className="InfoContainer">
          <li>
            <div>
              <a href="https://www.udemy.com/share/106ezS3@MNboApI4z3pjO6xOxcBqLaPi18yycNne8ACOU9Lk-_aOYoAP85azzSYn8huoQEB-YA==/">
                React do Zero a Maestria (c/ hooks, router, API, Projetos)
              </a>
            </div>
            <div>
              <img src={React} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.udemy.com/share/103hBA3@InmQLbtS3HjrUX0c5TwyBu5sQIGNtWqOt1yq_-QArTZMWH6I6vDodDhFIMLLQBHtvw==/">
                Google Firebase na Prática e em Detalhes(Usando JavaScript)
              </a>
            </div>
            <div>
              <img src={Firebase} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.udemy.com/share/109Zi63@BckUQ3T9JO1AxnrlYomCPH5haXs9MePUYXWXZnoFZmlOPA3c23P7UQhZCRVqTPyomg==/">
                Certificação UX UI DESIGN FIGMA + inteligência Artificial
              </a>
            </div>
            <div>
              <img src={gpt} alt="" />
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.senairs.org.br/cursos/cursos-de-evolucao-profissional/mecanica-de-manutencao">
                Mecânico de manutenção de maquinas industriais(Curso Técnico)
              </a>
            </div>
            <div>
              <img src={Senai} alt="" />
            </div>
          </li>
        </div>
        <Title title={"}"} />
      </div>
    </div>
  );
};

export default courses;
