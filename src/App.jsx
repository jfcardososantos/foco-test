// importando Components
import UserForm from './components/UserForm';
import Final from './components/Final';
import Steps from './components/Steps';

import React from 'react';

// chamando Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';
import './App.css';

const formTemplate = {
  
  acomodacao: "",
  incheck: "",
  outcheck: "",
  hospedes: "",
  criancas: "",
  name: "",
  sobrenome: "",
  cpf: "",
  nascimento: "",
  telefone: "",
  celphone: "",
  email: "",
  cep: "",
  cidade: "",
  estado: "",
  endereco: "",
  numero: "",
  bairro: "",
  complemento: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) =>{
      return {...prev, [key]: value };
    })

    //------------ SALVANDO NO LOCALSTORAGE ----------
  
  const armazenar=(key, value) => {
    localStorage.setData(key, value)
  };
  const consultar=(key) => {
    alert(localStorage.getData(key))
  };
  const apagar=(key) => {
    (localStorage.removeData(key))
  };

  };
  const formComponents = [ 
     <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
     <Final data={data}/>,    
    ];


  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
  useForm (formComponents);

  return (

    <div className="app">
      
      <main className="top">
      <div className="top-logo">
        <img src="./assets/layout/logo.png" alt="Logo" />
        <></><div className="linha-vertical"></div>
        </div>

        <div className="top-icons">
          <img src="./assets/icons/help-circle.svg" alt="help" />
          <img src="./assets/icons/mail.svg" alt="mail" />  
          <img src="./assets/icons/settings.svg" alt="config" />
          <h2>Admin</h2>
          <button>PF</button>
          <img src="./assets/icons/chevron-down.svg" alt="change-user" />  
        </div>
        </main>
        <div className="reserva-content">
        <div className="left-menu">
          <button dashboard><img src="./assets/icons/command.svg" alt="dashboard" />
           <h2>Dashboard</h2>
          </button>
          <button reserva><img src="./assets/icons/plus.svg" alt="new" />
          <h2>Nova reserva</h2>
          </button>
          <button configuracoes><img src="./assets/icons/settings.svg" alt="configs" />
          <h2>Configurações</h2>          
          </button>
        </div>


<div className="form-container">
  <Steps currentStep={currentStep} />
  <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
    <div className="inputs-container">{currentComponent}</div>
    <div className="actions">
      {!isFirstStep && (
      <button type="button" onClick={() => changeStep(currentStep - 1)}> 
      <span>Voltar</span>
    </button>
    )}

    {!isLastStep ? (
       <button type="submit">
       <span>Fazer reserva</span>
       </button>
    ) : (
      <button type="button" onClick={() => armazenar("ls_name", nome)}>
      <span>Salvar</span>
      </button>
    )
    
    }

    </div>
  </form>
</div>
</div>
</div>
  );
}



export default App
