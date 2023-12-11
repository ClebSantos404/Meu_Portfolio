import './index.css';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Servicos from './components/Servicos';

function App() {

  return (
    <div className='mx-md-5 borda'>
      <Header></Header>
      <Apresentacao></Apresentacao>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <Contato></Contato>
      <Servicos></Servicos>
    </div>
  );
}

export default App;
