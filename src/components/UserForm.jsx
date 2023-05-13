import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => {
  return (

<div>
  <h2>Dados da reserva</h2>
  <div className="sublinha"><h3></h3><h4></h4></div>
  <p></p>
        <div className="form-control">
        <label htmlFor="acomodacao">Acomodação</label>
        <select
        name="acomodacao"
        id='acomodacao'
        placeholder= ""
        value={data.acomodacao || ""}
        onChange={(e) => updateFieldHandler("acomodacao", e.target.value)}

        required>
          <option>Selecione uma acomodação</option><value>Sem acomodação</value>
          <option>Standard</option><value>Stardard</value>
          <option>Exclusive</option><value>Exclusive</value>
          <option>Luxo </option><value>Luxo</value>
          <option>Super Luxo</option><value>Super Luxo</value>
        
</select>
</div>
      <div className="form-control">
        <label htmlFor="incheck">Check-in</label>
          <input
          type='datetime-local'
          name='incheck'
          id='incheck'
          placeholder=''
          required
          value={data.incheck || ""}
          onChange={(e) => updateFieldHandler("incheck", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="outcheck">Check-out</label>
          <input
          type='datetime-local'
          name='outcheck'
          id='outcheck'
          placeholder=''
          required
          value={data.outcheck || ""}
          onChange={(e) => updateFieldHandler("outcheck", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="hospedes">Hóspedes</label>
          <input
          type='text'
          name='hospedes'
          id='hospedes'
          placeholder='01 adultos'
          required
          value={data.hospedes || ""}
          size={8}
          onChange={(e) => updateFieldHandler("hospedes", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="criancas">Crianças</label>
          <input
          type='text'
          name='criancas'
          id='criancas'
          placeholder='02 Crianças'
          value={data.criancas || ""}
          size={8}
          onChange={(e) => updateFieldHandler("criancas", e.target.value)}
          />
      </div>
      <h2>Dados do responsável</h2>
      <div className="sublinha"><h3></h3><h4></h4></div>
      <p></p>
      <div className="form-control">
          <label htmlFor="name">Nome</label>
          <input
          type='text'
          name='name'
          id='name'
          placeholder='Digite seu nome'
          required
          value={data.name || ""}
          size={30}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="name">Sobrenome</label>
          <input
          type='text'
          name='sobrenome'
          id='sobrenome'
          placeholder='Digite seu sobrenome'
          required
          size={30}
          value={data.sobrenome || ""}
          onChange={(e) => updateFieldHandler("sobrenome", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="cpf">CPF</label>
          <input
          type='number'
          name='cpf'
          id='cpf'
          placeholder='Digite seu CPF'
          required
          value={data.cpf || ""}
          onChange={(e) => updateFieldHandler("cpf", e.target.value)}
          />
      </div>

      <div className="form-control">
        <label htmlFor="nascimento">Data de nascimento</label>
          <input
          type='date'
          name='nascimento'
          id='nascimento'
          placeholder=''
          required
          value={data.nascimento || ""}
          onChange={(e) => updateFieldHandler("nascimento", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="telefone">Telefone:</label>
          <input
          type='number'
          name='telefone'
          id='telefone'
          placeholder='Digite seu telefone'
          value={data.telefone || ""}
          onChange={(e) => updateFieldHandler("telefone", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="celphone">Celular</label>
          <input
          type='number'
          name='celphone'
          id='celphone'
          placeholder='Digite seu celular'
          required
          value={data.celphone || ""}
          onChange={(e) => updateFieldHandler("celphone", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
          <input
          type='email'
          name='email'
          id='email'
          placeholder='Digite seu e-mail'
          required
          size={30}
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
      </div>
      <h2>Endereço</h2>
      <div className="form-control">
        <label htmlFor="CEP">CEP</label>
          <input
          type='text'
          name='cep'
          id='cep'
          placeholder='46400-000'
          required
          size={8}
          value={data.cep || ""}
          onChange={(e) => updateFieldHandler("cep", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="cidade">Cidade</label>
          <input
          type='text'
          name='cidade'
          id='cidade'
          placeholder='Caetité'
          required
          size={25}
          value={data.cidade || ""}
          onChange={(e) => updateFieldHandler("cidade", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="estado">Estado</label>
          <input
          type='text'
          name='estado'
          id='estado'
          placeholder='BA'
          required
          size={2}
          value={data.estado || ""}
          onChange={(e) => updateFieldHandler("estado", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="rua">Rua</label>
          <input
          type='text'
          name='endereco'
          id='endereco'
          placeholder='Av. Santana'
          required
          size={35}
          value={data.endereco || ""}
          onChange={(e) => updateFieldHandler("endereco", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="numero">Número</label>
          <input
          type='text'
          name='numero'
          id='numero'
          placeholder='680'
          required
          size={4}
          value={data.numero || ""}
          onChange={(e) => updateFieldHandler("numero", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="bairro">Bairro</label>
          <input
          type='text'
          name='bairro'
          id='bairro'
          placeholder='Centro'
          required
          size={25}
          value={data.bairro || ""}
          onChange={(e) => updateFieldHandler("bairro", e.target.value)}
          />
      </div>
      <div className="form-control">
        <label htmlFor="complemento">Complemento</label>
          <input
          type='text'
          name='complemento'
          id='complemento'
          placeholder='Casa 2'
          value={data.complemento || ""}
          onChange={(e) => updateFieldHandler("complemento", e.target.value)}
          />
      </div>
  </div>
  
  )
}


export default UserForm