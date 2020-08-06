import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState(['Teste']);
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
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.nome}
          onChange={handleChange}
        />
        {/*<div>
          <label>
            Descrição:
          <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>*/}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        { /*<div>
          <label>
            Cor:
          <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
       </div>*/}

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`$categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  )
}

export default CadastroCategoria;