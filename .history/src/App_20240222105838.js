import Main from './components/Main';
import Nav from './components/Nav';
import Model from './components/Model'
import Projects from './components/Projects';



function App() {

  const [openProjectModal, setOpenProjectModel] = useStat(false)

  return (
    <div className=" ">
      <Nav button={<div>PROJECT</div>} />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
