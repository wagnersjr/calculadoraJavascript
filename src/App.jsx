import { useState } from "react";
import "./Style.scss"

export default function App(){
  const[primeiroValor, setPrimeiroValor] = useState();
  const[segundoValor, setSegundoValor] = useState();
  const[resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
   setPrimeiroValor(Number(e.target.value));
   
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    
   };

   const soma = () =>  {
    setResultado(primeiroValor + segundoValor)

   };

   const subtracao = () =>{
    setResultado(primeiroValor - segundoValor)
   }

   const multiplicacao = () =>{
    setResultado(primeiroValor * segundoValor)
   }

   const divisao = () => {
    setResultado(primeiroValor/segundoValor)
   }

return(
  

  <main>
    

    <section className="section1">
    <h1>Calculadora</h1>

    <input placeholder="Insira um número" type="number" onChange={capturandoPrimeiroValor} />
    <input placeholder="Insira um número" type="number" onChange={capturandoSegundoValor} /> 

    </section>


<section className="section2">
    <button onClick={soma}>+</button>
    <button onClick={subtracao}>-</button>
    <button onClick={multiplicacao}>X</button>
    <button onClick={divisao}>/</button> 
 </section>

    <h3>{resultado}</h3>

  </main>
);
}