import React from 'react';
import { IoCode } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";

function Servicos() {

  return(
    <section id='servicos' className='py-5 mx-4 text-center d-flex justify-content-center'>
      <div className='w-50'>
        <h2 className='py-4'>Serviços</h2>
        <div id='servicoCards' className="servicoCards">
        <div className='cardServicos'>
          <IoCode className='iconeProjeto'></IoCode>
          <p className='contatoP-Format'>Criação de sites</p>
        </div>
        <div className='cardServicos'>
          <FaFigma className='iconeProjeto'></FaFigma>
          <p className='contatoP-Format'>UI Design</p>
        </div>
        <div className='cardServicos'>
          <LuSmartphone className='iconeProjeto'></LuSmartphone>
          <p className='contatoP-Format'>Sites responsivos</p>
        </div>
        </div>
      </div>
    </section>
  )
};

export default Servicos;