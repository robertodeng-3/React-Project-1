import Modal from './componants/Modal';
import Todo from './componants/Todo';
import Backdrop from './componants/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
          <Todo text='Learn React' />
          <Modal />
          <Backdrop />
    </div>
  );
}

export default App;
