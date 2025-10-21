import Upgrade from "./Upgrade";

export default function UpgradeList({ upgrades, cookies, onBuy }) {
  return (
    <div >
      <h3>Upgrades</h3>
      {upgrades.map((u) => (
        <Upgrade key={u.id} upgrade={u} cookies={cookies} onBuy={onBuy} />
      ))}
    </div>
  );
}
