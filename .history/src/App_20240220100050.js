import Main from './components/Main';
import Nav from './components/Nav';
import Model from './components/Model'

function App() {
  return (
    <div className="bg-[#f4eedb] h-screen ">
      <Nav />
      <Main />
      <Model className='-z-10' />
    </div>
  );
}

export default App;
