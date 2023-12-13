import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaGitAlt } from "react-icons/fa6";

const Habilidades = () => {
  const html = ['HTML5', <FaHtml5></FaHtml5>];
  const css = ['CSS3', <IoLogoCss3></IoLogoCss3>]
  const js = ['JavaScript', <IoLogoJavascript></IoLogoJavascript>];
  const bs = ['Bootstrap', <FaBootstrap></FaBootstrap>];
  const figma = ['Figma', <FaFigma></FaFigma>];
  const react = ['ReactJS', <FaReact></FaReact>];
  const gitHub = ['Github', <LuGithub></LuGithub>];
  const git = ['Git', <FaGitAlt></FaGitAlt>];

  function Cards(props, nomeTec, iconeTec) {
    return (
      <div id="card" className="text-center my-3 mx-2">
      <h4>{props.nomeTec}</h4>
      <div id="cardIcon">
        {props.iconeTec}
      </div>
      </div>
    );
  };

  return (
    <section id="habilidades" className="py-5 text-center">
    <h2 className="py-4 my-4">Habilidades</h2>
    <div id="cards" className="w-100 d-flex justify-content-center flex-wrap">
      <Cards nomeTec={html[0]} iconeTec={html[1]}></Cards>
      <Cards nomeTec={css[0]} iconeTec={css[1]}></Cards>
      <Cards nomeTec={js[0]} iconeTec={js[1]}></Cards>
      <Cards nomeTec={bs[0]} iconeTec={bs[1]}></Cards>
      <Cards nomeTec={figma[0]} iconeTec={figma[1]}></Cards>
      <Cards nomeTec={react[0]} iconeTec={react[1]}></Cards>
      <Cards nomeTec={gitHub[0]} iconeTec={gitHub[1]}></Cards>
      <Cards nomeTec={git[0]} iconeTec={git[1]}></Cards>
    </div>
    </section>
  );
}

export default Habilidades;