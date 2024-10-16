import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const url = 'https://dolarapi.com/v1/dolares/tarjeta';
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setValorDolar(res.data.venta);
        setRespuesta(res.data);
      }); 
  }, []);

  const [dolares, setDolares] = useState('');
  const [valorDolar, setValorDolar] = useState('');
  const [pesos, setPesos] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(valorDolar);
    setPesos(dolares * valorDolar);
  };

  return (
    <div>
      <h1>Dolar API</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="" 
          value={dolares}
          onChange={e => setDolares(e.target.value)}
        />
        <input 
          type="submit" 
          value="En pesos" 
        />
      </form>
      <p>
        Tenes que ponerte con {pesos} pesos
      </p>
      <pre>
        {JSON.stringify(respuesta)}
      </pre>
    </div>
  );
};

export default App;