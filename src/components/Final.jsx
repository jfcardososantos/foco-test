import './Final.css'

const Final = ({data}) => {
  return (
    <div className="final-container">
        <h2>REVISÃO DO CADASTRO</h2>
        <h4>Verifique os dados e salve o cadastro</h4>
        <p className="review-data">
        <span> Acomodação: </span>
        {data.acomodacao}
        </p>
        <p className="review-data">
        <span> Check-in: </span>
        {data.incheck}
        </p>
        <p className="review-data">
        <span> Check-out: </span>
        {data.outcheck}
        </p>
        <p className="review-data">
        <span> Hóspedes: </span>
        {data.hospedes}
        </p>
        <p className="review-data">
        <span> Crianças: </span>
        {data.criancas}
        </p>
        <p className="review-data">
        <span> Nome do responsável: </span>
        {data.name}
        </p>
        <p className="review-data">
        <span> Sobrenome: </span>
        {data.sobrenome}
        </p>
        <p className="review-data">
        <span> CPF: </span>
        {data.cpf}
        </p>
        <p className="review-data">
        <span> Data de nascimento: </span>
        {data.nascimento}
        </p>
        <p className="review-data">
        <span> Telefone: </span>
        {data.telefone}
        </p>
        <p className="review-data">
        <span> Celular: </span>
        {data.celphone}
        </p>
        <p className="review-data">
        <span> E-mail: </span>
        {data.email}
        </p>
        <p className="review-data">
        <span> CEP: </span>
        {data.cep}
        </p>
        <p className="review-data">
        <span> Cidade: </span>
        {data.cidade}
        </p>
        <p className="review-data">
        <span> Estado: </span>
        {data.estado}
        </p>
        <p className="review-data">
        <span> Rua: </span>
        {data.endereco}
        </p>
        <p className="review-data">
        <span> Número: </span>
        {data.numero}
        </p>
        <p className="review-data">
        <span> Bairro: </span>
        {data.bairro}
        </p>
        <p className="review-data">
        <span> Complemento: </span>
        {data.complemento}
        </p>


       
        </div>
  )
}

export default Final