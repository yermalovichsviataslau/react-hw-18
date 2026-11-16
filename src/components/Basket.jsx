function Basket({ cart, addItem , handleDecrease, clearBasket}) {
  return (
    <div>
      <p>mini basket</p>
      <div>
        {cart.length === 0 ? (
          <p>Корзина пустая</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} — {item.quantity} шт. <button onClick={() => addItem(item)}>Увеличить количество</button>
                <button onClick={()=> handleDecrease(item)}>Удалить товар</button>
              </li>
            ))}
          </ul>
          
        )}
        <button onClick={clearBasket}>Очистить корзину</button>
      </div>
    </div>
  );
}

export default Basket;
