// src/components/Header/Header.tsx

import React, { useState } from 'react';
import Sidebar from '../ui/Sidebar'; // Importamos o componente Sidebar
import '../../styles/Header.css'; // CSS para o Header

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Função para alternar o estado da sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="app-header">
        <div className="logo">
          wantedBooks
        </div>
        <button onClick={toggleSidebar} className="menu-button">
          ☰ {/* Ícone de menu (hambúrguer) */}
        </button>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;