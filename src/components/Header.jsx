import '../index.css';
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const activeButton = (value) => {
    setActiveItem(value);
    setTimeout(() => {
      setActiveItem(null);
    }, 3000);
  };

  return (
    <header className='cabecalho px-lg-5 d-flex justify-content-center'>
      <nav id="navbar" className='d-flex justify-content-between py-3 px-4 px-md-5 w-100'>
        <div className="portfolioName">
          <a href='https://github.com/ClebSantos404' target='_blank' className="destaquePort iconColor px-3" rel="noopener noreferrer">&#60;Portfólio&#47;&#62;</a>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <IoIosMenu className='iconColor fs-3'></IoIosMenu>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
          <li><a className={`dropdown-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => activeButton('home')} href="#home">Início</a></li>
            <li><a className={`dropdown-item ${activeItem === 'sobre' ? 'active' : ''}`}
        onClick={() => activeButton('sobre')} href="#sobre">Sobre</a></li>
            <li><a className={`dropdown-item ${activeItem === 'habilidades' ? 'active' : ''}`}
        onClick={() => activeButton('habilidades')} href="#habilidades">Habilidades</a></li>
            <li><a className={`dropdown-item ${activeItem === 'projetos' ? 'active' : ''}`}
        onClick={() => activeButton('projetos')} href="#projetos">Projetos</a></li>
            <li><a className={`dropdown-item ${activeItem === 'contato' ? 'active' : ''}`}
        onClick={() => activeButton('contato')} href="#contato">Contato</a></li>
            <li><a className={`dropdown-item ${activeItem === 'servicos' ? 'active' : ''}`}
        onClick={() => activeButton('servicos')} href="#servicos">Serviços</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;