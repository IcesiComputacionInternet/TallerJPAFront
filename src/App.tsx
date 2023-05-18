import Message from './Message'
import './App.css'

function App() {

  //Creamos un div y dentro de el le asignamos el componente Message
  //return <div> <Message/> </div>;

  return (
      <Message message = "Hello from app"/>
  );
}

export default App