import { useEffect, useState } from 'react';
import api from '../services/api';
import React from 'react';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Próba pobrania danych przy starcie komponentu
    api.get('/items')
      .then(res => setItems(res.data))
      .catch(() => setError("frontend połączony, ale backend jeszcze nie odpowiada — to normalne!"));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>􎀒􎀓 Cloud App Dashboard</h1>

      {error && (
        <p style={{ color: 'orange', fontWeight: 'bold' }}>
          {error}
        </p>
      )}

      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;