import React, { useState } from "react";
import Perfil from "../images/minhaFoto.jpg";
import Curriculo from "../pdf/Cleb-Curriculo-programador.pdf"

function Apresentacao() {
  const vaga = useState("Desenvolvedor Front-End");
  
  return (
    <div className='bg-header my-lg-5'>
      <section id="home" className="py-5 px-4 d-lg-flex md-row justify-content-center align-items-center">
        <div className="row text-center my-5 justify-content-center">
          <div className="minhaImg my-4 d-flex justify-content-center align-items-center">
            <img src={Perfil} alt="Minha imagem de perfil" />
          </div>
          <h1 className="fs-5">Olá, eu sou o Clebson Santos</h1>
          <h2 id="vaga" className=" vaga fs-5">
            {vaga}
          </h2>
        </div>
        <div
          id="btnPrincipal"
          className="d-md-flex justify-content-center row text-center gap-3 px-3" >
          <a href={Curriculo} download={'Currículo-Clebson-Santos'} className="custom-btn btn-10">Download CV</a>
          <a href="https://api.whatsapp.com/send/?phone=%2B5581991917860&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="custom-btn btn-10">Entrar em Contato</a>
        </div>
      </section>
      <section id="sobre" className="d-flex flex-column py-5 text-center justify-content-center w-100">
        <h2 className=" my-5">Sobre mim</h2>
        <div className="text-center text-sobre mx-auto">
          <p>
            De logística a entusiasta da tecnologia: minha jornada começou ao perceber o potencial de transformação no uso da tecnologia. Em 2022, dei início aos estudos em programação, explorando HTML, CSS, e mergulhando em linguagens como JavaScript e PHP.
            Hoje, traduzo essa jornada em projetos que aceleram a criação de aplicações web. Cada linha de código representa minha paixão por inovação e aprendizado constante. Que essa trajetória inspiradora continue a evoluir, impulsionada pela certeza de que a tecnologia molda o futuro.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Apresentacao;
