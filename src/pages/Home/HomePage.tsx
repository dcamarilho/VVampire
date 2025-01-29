import React from 'react';

const HomePage: React.FC = () => (
  <div>Welcome to VoulezVous Home!</div>
);

export default HomePage;

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ping`);
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        setData("Erro ao conectar ao backend");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Meu App!</h1>
      <p>Resposta do backend: {data || "Carregando..."}</p>
    </div>
  );
}
