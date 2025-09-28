import { useState } from 'react';
import Sidebar from '../ui/Sidebar'; 
import '../../styles/Header.css'; 

const Header: React.FC = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
          ☰ 
        </button>
      </header>
      

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;