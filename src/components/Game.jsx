import React from"react";

function Game() {
  // Number state
  const [cookies, setCookies] = React.useState(0);
  const [cookiesPerClick, setCookiesPerClick] = React.useState(1); 

  // state for upgrade
  const [upgrades, setUpgrades] = React.useState([
    { id: 1, name: "Extra Cookie", cost: 5, purchased: false },
  ]);

  // Object state (player)
  const [player, setPlayer] = React.useState({ name: "Player 1", clicks: 0 });
  

  
 

  // Click cookie
  function handleClick() {
    setCookies(prevCookies => prevCookies + cookiesPerClick);
    setPlayer(prevPlayer =>({
        ...prevPlayer, clicks:prevPlayer.clicks +1}));
  }

  // Buy upgrade
  function buyUpgrade(id) {
    const upgradeToBuy =upgrades.find(u=> u.id ===id);
      if (!upgradeToBuy ||cookies <upgradeToBuy.cost || upgradeToBuy.purchased){
        return;
      }
        //update number
          setCookies(prevCookies => prevCookies- upgradeToBuy.cost);
          setCookiesPerClick(prevClick => prevClick+ 1); 
        //update array
          const updatedUpgrades = upgrades.map(u => {
            if (u.id === id) {
            // Create a NEW object
            return { ...u, purchased: true }; 
            }
            
            return u;
        });

        // Call the setter with the NEW array
        setUpgrades(updatedUpgrades);
        }
  return (
    <div className="card">
      <h2>Cookies: {cookies}</h2>
      <button onClick={handleClick}>🍪 Click Me!</button>

      <h3>Upgrades</h3>
      {upgrades.map(function(u) {
        return (
          <div key={u.id}>
            {u.name} - Cost: {u.cost}  
            <button onClick={() => buyUpgrade(u.id)} disabled={u.purchased || cookies < u.cost}>
              {u.purchased ? "Purchased" : "Buy"}
            </button>
          </div>
        );
      })}

      <p>Total clicks: {player.clicks}</p>

      {cookies >= 10 && <h2>🎉 You Win! 🎉</h2>}
    </div>
  );
}

export default Game;

