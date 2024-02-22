import Main from './components/Main';
import Nav from './components/Nav';
import Model from './components/Model'
import Projects from './components/Projects';
import { useState } from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import Modal from './components/Modal';


function App() {

  const [openProjectModal, setOpenProjectModel] = useState(false)

  return (
    <div className="hidden md:">
      <Nav button={<div onClick={() => setOpenProjectModel(true)}>PROJECT</div>} />
      <Main />
      {
        openProjectModal && <Projects button={<LiaTimesSolid onClick={() => setOpenProjectModel(false)}  />} />
      }
      <Modal button={<div onClick={() => setOpenProjectModel(true)}>PROJECT</div>} />
    </div>
  );
}

export default App;
