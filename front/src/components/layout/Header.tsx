// src/components/Header/Header.tsx

import React, { useState } from 'react';
import Sidebar from '../ui/Sidebar'; // Importamos o componente Sidebar
import '../../styles/Header.css'; // CSS para o Header

const Header: React.FC = () => {
  // Criamos um estado para controlar se a sidebar está aberta ou não
  // O valor inicial é 'false' (fechada)
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Função para alternar o estado da sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Inverte o valor atual (true vira false, e vice-versa)
  };

  return (
    <>
      <header className="app-header">
        <div className="logo">
          MeuSite
        </div>
        <nav className="navigation">
          {/* Outros links do seu header podem ir aqui */}
        </nav>
        <button onClick={toggleSidebar} className="menu-button">
          ☰ {/* Ícone de menu (hambúrguer) */}
        </button>
      </header>
      
      {/* Renderizamos a Sidebar aqui, passando o estado e a função de controle.
        A Sidebar só será visível por causa do CSS, mas ela está sempre no DOM.
      */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;