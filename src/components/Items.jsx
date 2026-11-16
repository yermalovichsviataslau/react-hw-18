import CardItem from "./CardItem";

function Items({ onAdd }) {
  const items = [
    { id: 1, title: "батон" },
    { id: 2, title: "масло" },
    { id: 3, title: "кефир" },
  ];
  return (
    <ul>
      {items.map((item) => (
        <CardItem key={item.id} onAdd={()=>onAdd(item)}>{item.title}</CardItem>
      ))}
    </ul>
  );
}

export default Items;
