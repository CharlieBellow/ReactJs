


const Lists = () => {

  const items = [{
    id: 1,
    name: "Charlie"
  },
    {
      id: 2,
      name: "Gustavo"
  }]
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id}: {item.name}
        </p>
      ))}
    </div>
  )
}

export default Lists;