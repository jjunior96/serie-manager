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
import { Link } from 'react-router-dom';

const Header = () => {
  const [ open, setOpen ] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }
  
  return (
    <Navbar color='dark' dark expand='md' >
      <NavbarBrand tag={Link} to='/'>Minhas series</NavbarBrand>
      <NavbarToggler onClick={handleToggle}/>
      <Collapse isOpen={open} navbar >
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to='/genres'>Generos</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )

}

export default Header;