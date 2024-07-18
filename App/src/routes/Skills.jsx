import "./Skills.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import python from "../assets/python.png";
import React from "../assets/react.svg";
import Js from "../assets/js.png";
import Firebase from "../assets/firebase.png";
import html from "../assets/html.png";
import gpt from "../assets/gpt.png";
import node from "../assets/node.png";
import css from "../assets/css.png";

function Skills() {
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

    const xM = e.clientX - offset.current.x;
    // eslint-disable-next-line no-unused-vars
    const yM = e.clientY - offset.current.y;

    setPosition({ x, y });

    if (x < 300 ) {
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
    setPage("/Jorney");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/");
    // Coloque aqui a função que deseja executar
  };


  return (
    <div className="Skills">
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
        <Title title="Habilidades    {" />
        <div className="InfoContainer">
          <div className="hard">
            <h2>Hard:</h2>
            <ul className="itens">
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={React} alt="" />
                    <p>React</p>
                  </div>
                  <div className="box2">
                    <h3>9</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={Js} alt="" />
                    <p>JavaScript</p>
                  </div>
                  <div className="box2">
                    <h3>9</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={node} alt="" />
                    <p>NodeJs</p>
                  </div>
                  <div className="box2">
                    <h3>7</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={python} alt="" />
                    <p>Python</p>
                  </div>
                  <div className="box2">
                    <h3>6</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={Firebase} alt="" />
                    <p>Python</p>
                  </div>
                  <div className="box2">
                    <h3>8</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={gpt} alt="" />
                    <p>Prompt Engineering</p>
                  </div>
                  <div className="box2">
                    <h3>10</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="info">
                  <div className="box1">
                    <img src={html} alt="" />
                    <p>Html</p>
                  </div>
                  <div className="box2">
                    <h3>10</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
              <div className="info">
                  <div className="box1">
                    <img src={css} alt="" />
                    <p>Css</p>
                  </div>
                  <div className="box2">
                    <h3>10</h3>
                  </div>
                </div>
                <div className="level">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="soft">
            <h2>Soft:</h2>
            <ul>
              <li><p>Trabalho em equipe</p></li>
              <li><p>Criatividade</p></li>
              <li><p>Pensamento Critico</p></li>
              <li><p>Gestão de tempo</p></li>
            </ul>
          </div>
        </div>
        <Title title="}" />
      </div>
      <div className="container-mobile"></div>
    </div>
  );
}

export default Skills;
