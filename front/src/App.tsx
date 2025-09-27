import Header from './components/layout/Header'; // Importe o Header

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <h1>Bem-vindo à sua Aplicação!</h1>
        <p>Clique no botão de menu no canto superior direito para ver a sidebar em ação.</p>
        {/* O resto do conteúdo da sua página vai aqui */}
      </main>
    </div>
  );
}

export default App;