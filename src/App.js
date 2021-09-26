import './App.css';

import Header from './componets/Header';
import Footer from './componets/Footer';
import Todos from './componets/Todos';

function App() {
  let a="hello"
  return (
    <div>
      < Header title="Todo List" searchbar={true}/>
      <Todos />
      < Footer/>
    </div>
  );
}

export default App;
