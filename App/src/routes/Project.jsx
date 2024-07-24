import "./Project.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Poke from "../assets/LogoPokecatch.png";
import LGM from "../assets/Logo.png";

function Project() {
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
    setPage("/Repository");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/Courses");
    // Coloque aqui a função que deseja executar
  };

  return (
    <div className="Project">
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
        <Title title="Projetos    {" />
        <div className="InfoContainer">
          <li>
            <div>
              <img src={LGM} alt="" />
            </div>
            <div>
              <h3>LGMdeveloper</h3>
              <p>
                Projeto especial desenvolvido e publicado para minha empresa
                pessoal de desenvolvimento web.
              </p>
            </div>
            <div>
              <a href="https://lgmdeveloper.vercel.app" className="item">
                Visit
              </a>
            </div>
          </li>
          <li>
            <div>
              <img src={Poke} alt="" />
            </div>
            <div>
              <h3>Pokecatch</h3>
              <p>
                Jogo Desenvolvido para um projeto de faculdade, versão inicial
                do projeto, complemente jogave. Tema de pokemon .o objetivo é
                colhecianar todos os pokemons, capturando eles nos locais ou
                jogando o mini-jogo "Quem é esse pokemon ?"
              </p>
            </div>
            <div>
              <a
                href="https://pokecatch23-ay50uqa03-lgm-potifolio.vercel.app"
                className="item"
              >
                Visit
              </a>
            </div>
          </li>
        </div>
        <Title title={"}"} />
      </div>
      <div className="container-mobile">
      <Title title="Projetos    {" />
      <div className="InfoContainer">
          <li>
            <div>
              <img src={LGM} alt="" />
            </div>
            <div>
              <h3>LGMdeveloper</h3>
              <p>
                Projeto especial desenvolvido e publicado para minha empresa
                pessoal de desenvolvimento web.
              </p>
            </div>
            <div>
              <a href="https://lgmdeveloper.vercel.app" className="item">
                Visit
              </a>
            </div>
          </li>
          <li>
            <div>
              <img src={Poke} alt="" />
            </div>
            <div>
              <h3>Pokecatch</h3>
              <p>
                Jogo Desenvolvido para um projeto de faculdade, versão inicial
                do projeto, complemente jogavel. Tema de pokemon .O objetivo é
                colhecionar todos os pokemons, acertando os mini-jogos de quiz envolvendo o tema"
              </p>
            </div>
            <div>
              <a
                href="https://pokecatch-five.vercel.app"
                className="item"
              >
                Visit
              </a>
            </div>
          </li>
        </div>
      <Title title={"}"} />
      </div>
    </div>
  );
}

export default Project;
