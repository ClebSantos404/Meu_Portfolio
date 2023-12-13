import React from "react";

import projeto1 from "../images/projeto1.png";
import projeto2 from '../images/projeto2.png';
import projeto3 from '../images/projeto3.png';
import projeto4 from '../images/projeto4.png';

const Projetos = () => {

  function Cards(props, imgProjeto, nomeProjeto, linkProjeto, linkGitProjeto) {
    return (
      <div className="card my-5 mx-2 d-flex justify-content-center">
            <img className="bg-projeto w-100" src={props.imgProjeto} alt="Imagem do projeto" />
          <div className="tituloCard text-center row justify-content-center">
            <p className="text-center">{props.nomeProjeto}</p>
          </div>
          <div className="btnProjeto d-flex justify-content-evenly py-3">
            <a className="linkFormat custom-btn btn-10 px-3 py-2" href={props.linkProjeto} target="_blank" rel="noopener noreferrer" >Acessar projeto</a>
            <a className="linkFormat custom-btn btn-10 px-3 py-2" href={props.linkGitProjeto} target="_blank" rel="noopener noreferrer">Acessar repositório</a>
          </div>
      </div>
    );
  };

  return(
    <section id="projetos" className=" projetos text-center mx-4">
      <h2 className="py-2 ">Projetos</h2>
      <div>
        <div className="px-md-5 text-start">
          <span className="destaqueTxt">Destaques</span>
          </div>
        <div className="d-flex justify-content-center flex-wrap gap-md-4">
          <Cards linkGitProjeto={'https://github.com/ClebSantos404/Finans_page'} linkProjeto={'https://clebsantos404.github.io/Finans_page/'} imgProjeto={projeto1} nomeProjeto={'Finans - Finanças Pessoais'}></Cards>
          <Cards linkGitProjeto={'https://github.com/ClebSantos404/Lading-page-Jazz-School'} linkProjeto={'https://clebsantos404.github.io/Lading-page-Jazz-School/'} imgProjeto={projeto2} nomeProjeto={'Landing Page - Jazz School'}></Cards>
          <Cards linkGitProjeto={'https://github.com/ClebSantos404/Project-Mario'} linkProjeto={'https://clebsantos404.github.io/Project-Mario/'} imgProjeto={projeto3} nomeProjeto={'MarioMovieWeb'}></Cards>
          <Cards linkGitProjeto={'https://github.com/ClebSantos404/Snapclima'} linkProjeto={'https://clebsantos404.github.io/Snapclima/'} imgProjeto={projeto4} nomeProjeto={'SnapClima API'}></Cards>
        </div>
      </div>
    </section>
  );
}

export default Projetos;