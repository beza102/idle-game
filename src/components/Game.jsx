import React from "react";
import Button from "./Button";
import UpgradeList from "./UpgradeList";
import PlayerStats from "./PlayerStats";

function Game() {
  const [cookies, setCookies] = React.useState(0);
  const [cookiesPerClick, setCookiesPerClick] = React.useState(1);
  const [upgrades, setUpgrades] = React.useState([
    { id: 1, name: "Extra Cookie", cost: 5, purchased: false },
  ]);
  const [player, setPlayer] = React.useState({ name: "Player 1", clicks: 0 });

  function handleClick() {
    setCookies((prev) => prev + cookiesPerClick);
    setPlayer((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
  }

  function buyUpgrade(id) {
    const upgradeToBuy = upgrades.find((u) => u.id === id);
    if (!upgradeToBuy || cookies < upgradeToBuy.cost || upgradeToBuy.purchased) return;

    setCookies((prev) => prev - upgradeToBuy.cost);
    setCookiesPerClick((prev) => prev + 1);

    setUpgrades((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, purchased: true } : u
      )
    );
  }

  return (
    <div className="card text-center p-4">
      <h2>Cookies: {cookies}</h2>

      <Button onClick={handleClick} />

      <UpgradeList upgrades={upgrades} cookies={cookies} onBuy={buyUpgrade} />

      <PlayerStats player={player} />

      {cookies >= 10 && <h2>🎉 You Win! 🎉</h2>}
    </div>
  );
}

export default Game;
