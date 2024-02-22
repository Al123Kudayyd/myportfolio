import Main from './components/Main';
import Nav from './components/Nav';
import Model from './components/Model'
import Projects from './components/Projects';
import { useState } from 'react';
import { LiaTimesSolid } from "react-icons/lia";


function App() {

  const [openProjectModal, setOpenProjectModel] = useState(false)

  return (
    <div className=" ">
      <Nav button={<div on>PROJECT</div>} />
      <Main />
      <Projects button={<LiaTimesSolid  />} />
    </div>
  );
}

export default App;
