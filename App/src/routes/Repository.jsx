import "./Repository.css";

import Title from "../components/Title";
import Logo from "../components/Logo";
import Midias from "../components/Midias";
import Repositorios from "../components/Respositorio";
import ItemRepositorio from "../components/ItemRepositorio";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Repository = () => {
  const navigate = useNavigate();

  const [ExitLeft, setExitLeft] = useState(false);
  const [ExitRight, setExitRight] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableRef = useRef(null);
  const [Page, setPage] = useState();
  const offset = useRef({ x: 0, y: 0 });


  const [reposFixo, setReposFixo] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(
      `https://api.github.com/users/luizGMPortfolio`
    );
    const newUser = await userData.json();
    const userRepos = await fetch(newUser.repos_url);
    const repositorios = await userRepos.json();
    setReposFixo(repositorios);
    setRepos(repositorios);
    setCurrentUser(newUser);
  };

  // eslint-disable-next-line no-unused-vars
  const filtragem = async (value) => {
    if (value === "Python") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "Python"
      );
      setRepos(filtro);
    } else if (value === "HTML") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "HTML"
      );
      setRepos(filtro);
    } else if (value === "JavaScript") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "JavaScript"
      );
      setRepos(filtro);
    } else if (value === "React") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "React"
      );
      setRepos(filtro);
    } else if (value === "PHP") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "PHP"
      );
      setRepos(filtro);
    } else if (value === "TypeScript") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "TypeScript"
      );
      setRepos(filtro);
    } else if (value === "Vue") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "Vue"
      );
      setRepos(filtro);
    } else if (value === "CSS") {
      var filtro = reposFixo.filter(
        (reposFixo) => reposFixo.language === "CSS"
      );
      setRepos(filtro);
    } else {
      setRepos(reposFixo);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

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
    setPage("/");
    // Coloque aqui a função que deseja executar
  };
  const triggerFunctionRight = () => {
    console.log("Função disparada ao atingir o ponto!");
    setExitRight(true);
    setPage("/Project");
    // Coloque aqui a função que deseja executar
  };

  return (
    <div className="repository">
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
        <Title title="Repositório   {" />
        <Repositorios>
          {repos.map((rep) => (
            <ItemRepositorio
              key={rep.id}
              url={rep.html_url}
              nameProject={rep.name}
              descProject={rep.description}
              languages={rep.language ? rep.language : "não deifinida"}
            />
          ))}
        </Repositorios>
        <Title title={"}"} />
      </div>
    </div>
  );
};

export default Repository;
