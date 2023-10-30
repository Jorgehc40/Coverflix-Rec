import { Route, Routes } from "react-router-dom";
import Error from '../components/Error';

const PaginasUsuario = () => {
    return (
      <Routes>
        <Route path="/" element={<h1>Página Inicial do Usuário</h1>} />
        <Route path="/dados" element={<h1>Dados do Usuário</h1>} />
        <Route path="*" element={<Error codigoDeErro={404}/>} />
      </Routes>
    );
}

export default PaginasUsuario;