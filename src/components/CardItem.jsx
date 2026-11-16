function CardItem ({children, onAdd}){
  return (
    <div>
      {children}
      <button onClick={onAdd}>Добавить товар</button>
    </div>
  )
}

export default CardItem