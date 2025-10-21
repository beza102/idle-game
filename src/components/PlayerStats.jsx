export default function PlayerStats({ player }) {
  
  return (
    <div>
      <p>Player: {player.name}</p>
      <p>Total Clicks: {player.clicks}</p>
    </div>
  );
}
