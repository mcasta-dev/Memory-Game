export function WinMessage ({moves}) {
  return (
    <div className="win-message">
      <h2>Parabéns</h2>
      <p>Você encontrou todos os pares em {moves} tentativas!</p>
    </div>
  );
};
