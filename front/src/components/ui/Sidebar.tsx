import React from 'react';
import './styles/Sidebar.css'; // Importaremos o nosso CSS aqui

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const sidebarClassName = isOpen? "sidebar-open" : "sidebar";

    return (
        <div className={sidebarClassName}>
            <div className="sidebar-overlay" onClick={onClose}></div>

            <div className="sidebar-content">
                <button onClick={onClose} className="close-button">
                    &times;
                </button>

                <h2>Menu</h2>
                <ul>
                    <li><a href="#inicio" onClick={onClose}>Início</a></li>
                    <li><a href="#servicos" onClick={onClose}>Serviços</a></li>
                    <li><a href="#sobre" onClick={onClose}>Sobre</a></li>
                    <li><a href="#contato" onClick={onClose}>Contato</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;