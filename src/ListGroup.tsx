function ListGroup(){
  const items = ["Colombia", "Brasil", "Ecuador", "Bolivia", "Venezuela"];

  return(
    <>
      <h1>List group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup;