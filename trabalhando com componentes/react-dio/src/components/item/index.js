const Item = (props) => {
    return (
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
            {props.children}
        </a>
        //o children serve pra dizer que a teg vai ter abertura e fechamento
    )
}

export default Item;