import React from 'react';
import '../Paginas/Payments.css';

export default function PaymentCards() {
  return (
    <div className="cards-wrapper">
      <div className="payment-card" style={{ backgroundColor: '#ece7fc' }}>
        <span className="icon">⏳</span>
        <div>
          <h3>Pagamentos Pendentes</h3>
          <p>0 — <strong>R$ 0,00</strong></p>
        </div>
      </div>
      <div className="payment-card" style={{ backgroundColor: '#e9fbe6' }}>
        <span className="icon">✅</span>
        <div>
          <h3>Pagamentos Realizados</h3>
          <p>0 — <strong>R$ 0,00</strong></p>
        </div>
      </div>
      <div className="payment-card" style={{ backgroundColor: '#ffe8e8' }}>
        <span className="icon">⚠️</span>
        <div>
          <h3>Pagamentos Atrasados</h3>
          <p>0 — <strong>R$ 0,00</strong></p>
        </div>
      </div>
      <div className="payment-card" style={{ backgroundColor: '#f7ecfc' }}>
        <span className="icon">💰</span>
        <div>
          <h3>Total de Pagamentos</h3>
          <p>0 — <strong>R$ 0,00</strong></p>
        </div>
      </div>
    </div>
  );
}
