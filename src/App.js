import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Hoje from "./pages/Hoje";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Tudo>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/habitos" element={<Habitos />}/>
          <Route path="/hoje" element={<Hoje />}/>
          <Route path="/historico" element={<Historico />}/>
        </Routes>
      </Tudo>
    </BrowserRouter>
  );
}

const Tudo = styled.div`
height: 667px;
width: 375px;
background-color: gray;
`