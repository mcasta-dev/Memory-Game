export function GameHeader({score, moves, onReset}) {
  return (
    <div className="game-header">
      <h1>🧠 Jogo da Memória</h1>
      <div className="stats">
        <div className="stats-item">
          <span className="stat-label">Pontos: </span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stats-item">
          <span className="stat-label">Tentativas: </span>
          <span className="stat-value">{moves}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={onReset}>Novo Jogo</button>
    </div>
  );
}
