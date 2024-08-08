function List(props) {
    const ittems = props.items

    const allitems = ittems.map(item => 
                                        <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                        </li>
                                        )
    const a = props.category
    return (
        <>
        <div className="">
            <h3>{a}</h3>
            <ol>{allitems}</ol>
        </div>
        </>
    )
}

export default List