import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

function contato() {
  return (
    <section
      id="contato"
      className="row w-100 justify-content-center text-center">
      <h2>Contato</h2>
      <div className="text-center sm-row d-md-flex wrap py-5 gap-md-5 justify-content-center">
        <div className="contatoIcone row">
          <a
            href="mailto:clebsondantas404@gmail.com"
            className="linkFormat"
            rel="noopener noreferrer">
            <MdEmail className="contatoIconFormat"></MdEmail>
            <h3>E-mail</h3>
            <p className="contatoP-Format">clebsondantas404@gmail.com</p>
          </a>
        </div>
        <div className="contatoIcone row">
          <a
            href="https://www.linkedin.com/in/clebsondantas404"
            className="linkFormat"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn className="contatoIconFormat"></FaLinkedinIn>
            <h3>Linkedin</h3>
            <p className="contatoP-Format">@clebsondantas404</p>
          </a>
        </div>
        <div className="contatoIcone row">
          <a
            href="https://github.com/ClebSantos404"
            className="linkFormat"
            target="_blank"
            rel="noopener noreferrer">
            <LuGithub className="contatoIconFormat"></LuGithub>
            <h3>Github</h3>
            <p className="contatoP-Format">@ClebSantos404</p>
          </a>
        </div>
        <div className="contatoIcone row">
          <p className="linkFormat">
            <IoCallOutline className="contatoIconFormat"></IoCallOutline>
            <h3>Telefone</h3>
            <p className="contatoP-Format">&#40;81&#41; 99191-7860</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default contato;
