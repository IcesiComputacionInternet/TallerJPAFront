//Se declara una función con un retorno que es el resultado del modulo
function Message(){

    //Cuando se van a usar multples lineas de HTML es necesario poner todo dentro de ( )
    //Se usa dentro del ( ) el <> y </> cuando vamos a ingresar varios tags HTML 

    //El siguiente ejemplo usa bootstrap para agregar la clase de estilo css con el tag test-muted. Se usa classname en lugar de class

    return (
        <>
            <h3> Hello world </h3>  
            <small className="text-muted"> By Santiago Trochez and Juan Prada xd</small>
        </>
    );
}

export default Message;