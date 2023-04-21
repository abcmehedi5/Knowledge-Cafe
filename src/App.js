import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Qna from './Components/Qna/Qna';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <hr />
      <Blog></Blog>
      <Qna></Qna>
    </div>
  );
}

export default App;
