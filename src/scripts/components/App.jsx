import "../../stylesheets/css/main.css";
import Text from './text.jsx';
import List from './list.jsx';
import Ending from './ending.jsx';

function App() {

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="title">Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque</h1>
          <Text />
          <List />
          <Ending />
        </div>
      </div>
    </>
  )
}

export default App
