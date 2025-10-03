'use client';
import { useState } from 'react';

export default function Home() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo à GaláxiaX 🚀</h1>
      <p>Explore o espaço, conheça missões e astronautas!</p>

      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
    </div>
  );
}
