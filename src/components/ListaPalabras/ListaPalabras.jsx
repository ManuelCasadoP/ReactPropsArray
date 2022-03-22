function ListaPalabras (props) {

    const listaElementosHtml = props.listaPalabras.map(
        (palabra, idx)=>{
            return (
                <li key={idx}>{palabra}</li>
            )
        }
    )

    return (
        <ul>
            {listaElementosHtml}
        </ul>
    )
}

export default ListaPalabras