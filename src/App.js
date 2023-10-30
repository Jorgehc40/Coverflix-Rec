import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import PaginasUsuario from "./routes/userRoutes";
import Error from './components/Error';
import Filme from "./pages/filme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          {/* <Route path="/usuario/*" element={<PaginasUsuario />} /> */}
          {/* <Route path="/error/:code" element={<Error />} /> */}
          {/* <Route path="*" element={<Error codigoDeErro={404} />} /> */}
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
