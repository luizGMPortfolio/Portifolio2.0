import "./jorney.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Jorney() {
  const navigate = useNavigate();

  const [ExitLeft, setExitLeft] = useState(false);
  const [ExitRight, setExitRight] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableRef = useRef(null);
  const [Page, setPage] = useState();
  const offset = useRef({ x: 0, y: 0 });

  const [positionM, setPositionM] = useState({ x: '10%', y: 0 });
  const [ExitLeftM, setExitLeftM] = useState(false);
  const [ExitRightM, setExitRightM] = useState(false);

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
    const yM = e.clientY - offset.current.y;

    setPosition({ x, y });
    setPositionM({ x, y});

    if (x < 300 ) {
      // Condição para executar função
      triggerFunctionLeft();
    } else if (x > 600) {
      triggerFunctionRight();
    }

    if(xM < 5){
      triggerFunctionLeftM();
    }
    else if(xM > 100){
      triggerFunctionRightM();
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setPosition({ x: 500, y: 0 });
    setPositionM({ x: '10%', y: 0 })
  };
  const triggerFunctionLeft = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitLeft(true);
    setPage("/Courses");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/Skills");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionLeftM = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitLeftM(true);
    setPage("/Courses");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRightM = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRightM(true);
    setPage("/Skills");
    // Coloque aqui a função que deseja executar
  };

  return (
    <div className="jorney">
      <Logo Type={"black"} />
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
        <Title title="Experiencia    {" />
        <div className="InfoContainer">
          <div>
            <h2>Espaço móveis:</h2>
            <div>
              <span><h3>Cargo:</h3>Sócio</span>
              <span><h3>Periodo:</h3> 2018-2023</span>
              <p>
                Meu primeiro trabalho foi como sócio em uma loja de móveis, onde
                eu realizava vendas e participava da administração. Além disso,
                desenvolvi um site para a loja, proporcionando uma nova fonte de
                receita para o negócio.
              </p>
            </div>
          </div>
          <div>
            <h2>Desenvolvedor Web:</h2>
            <div>
              <span><h3>Cargo:</h3>Autonomo</span>
              <span><h3>Periodo:</h3>2022-2024</span>
              <p>
                Trabalho como freelancer no desenvolvimento de projetos para
                pessoas físicas e jurídicas. Meus projetos abrangem desde
                portfólios simples até APIs mais complexas. Estou disponível
                para atender uma variedade de necessidades de desenvolvimento,
                adaptando-me às demandas específicas de cada cliente.
              </p>
            </div>
          </div>
        </div>
        <Title title={"}"} />
      </div>
      <div
        className={`ContainerMobile ${
          ExitLeftM ? "exitAnimationLeftM" : ""
        } ${ExitRightM ? "exitAnimationRightM" : ""}`}
        ref={draggableRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onAnimationEnd={() => (Page ? navigate(Page) : "")}
        style={{ left: positionM.x}}
      ></div>
    </div>
  );
}

export default Jorney;
