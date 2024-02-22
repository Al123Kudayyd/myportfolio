import Main from './components/Main';
import Nav from './components/Nav';
import Model from './components/Model'
import Projects from './components/Projects';



function App() {
  return (
    <div className=" ">
      <Nav button={<div></div>} />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
