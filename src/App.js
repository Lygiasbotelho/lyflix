import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"fafsa"}
      />
      

     <h1>Hello world</h1>
     Hot reload
    </div>
  );
}

export default App;
