import React, { useState } from 'react';
import { 
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';

function App() {
  const [ open, setOpen ] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div>
      <Navbar color='light' light expand='md' >
        <NavbarBrand>Minhas series</NavbarBrand>
        <NavbarToggler onClick={handleToggle}/>
        <Collapse isOpen={open} navbar >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Generos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
