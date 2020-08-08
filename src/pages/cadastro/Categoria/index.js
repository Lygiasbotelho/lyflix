import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    //chave: nome, descrição, qualquer coisa
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {

    /* Não funcionou!!!!
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    ); :( */

    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {

    //console.log('alo alo Brasilll'); //O que quer que aconteça?
    if (window.location.href.includes('localhost')) {
      const URL_TOP = 'http://localhost:8080/categorias';

      fetch(URL_TOP)
        .then(async (respostaDoServidor) => {
          if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
          return;
        } throw new Error('Não foi possível pegar os dados');
    })
}

    /////
    // setTimeout(() => {
    //   setCategorias([
    //       ...categorias,
    //       {
    //         "id": 1,
    //         "nome": "Front End",
    //         "descricao": "Uma categoria bacanudassa",
    //         "cor": "#cbd1ff",
    //     },
    //     {
    //         "id": 2,
    //         "nome": "Back End",
    //         "descricao": "Outra categoria bacanudassa",
    //         "cor": "#cbd1ff",
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);      //[] Quando quer que aconteça?, se vazio só ocorrerá quando carregar a tela



/* <form style={{ background: nomeDaCategoria}} onSubmit={function handleSubmit(infosDoEvento) {*/
return (
  <PageDefault>
    <h1>Cadastro de Categoria: {values.nome} </h1>

    <form onSubmit={function handleSubmit(infosDoEvento) {
      infosDoEvento.preventDefault();
      //console.log('Você tentou enviar o form né?');
      setCategorias([
        ...categorias,
        values
      ]);

      setValues(valoresIniciais);

    }}>

      <FormField
        label="Nome da Categoria"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />

      <FormField
        label="Descrição"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
      />

      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />

      <Button>
        Cadastrar
        </Button>
    </form>

    {categorias.length === 0 && (
      <div>
        {/* Cargando...*/}
          Loading...
      </div>
    )}


    <ul>
      {categorias.map((categoria) => (
        <li key={`${categoria.nome}`}>
          {categoria.nome}
        </li>
      ))}
    </ul>


    <Link to="/">
      Ir para home
      </Link>

  </PageDefault>
)
}

export default CadastroCategoria;