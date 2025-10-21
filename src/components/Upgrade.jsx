export default function Upgrade({ upgrade, cookies, onBuy }) {
  return (
    <div>
      <span>
        {upgrade.name} - Cost: {upgrade.cost};
       
      </span>
      <button
        onClick={() => onBuy(upgrade.id)}
        disabled={upgrade.purchased || cookies < upgrade.cost}
      >

        {upgrade.purchased ? "Purchased" : "Buy"}
      </button>
    </div>
  );
}
