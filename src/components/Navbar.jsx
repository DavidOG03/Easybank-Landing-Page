import React, {useState} from 'react'
import logo from '/assets/images/logo.svg'
import styled from 'styled-components';


 const Nav = styled.nav`
background: hsl(0, 0%, 100%);
display: flex;
justify-content: space-between;
align-items:center;
padding: 0;
z-index: 12;
width:100%;
padding: 1.15rem 1.5rem;
 img:hover{
  cursor: pointer;
  height: 100%;
}
`;

 const NavLink = styled.li`

display: inline-block;
text-decoration: none;
height: 100%;
cursor: pointer;
&.active {
  color:hsl(233, 26%, 24%);
}
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  outline:none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 1rem;

  &:hover {
    color: #bada55;
  }
  

}

  @media (min-width: 800px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (width < 800px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-block: 0.8rem;
    width:90%;
    max-width:25rem;
    text-align:center;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index:999;
    background: #fff;
    border-radius: 0.3rem;

    
      li{
        list-style: none;
        display: block;
        margin-block: 0.8rem;
        &:hover{
          a{
            color: hsl(233, 26%, 24%);
          }
      }
        a{
            text-decoration: none;
            color: hsl(233, 8%, 62%);
            position: relative;
            font-size:1.25rem;
           
        }
    }

    @media (min-width: 800px) {
      display: none;
    }
`;


 const NavBtn = styled.button`
border-radius: 1.8rem;
background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
margin-left: auto;
display: block;
padding: 0.9rem 2rem;
outline: none;
border: none;
cursor: pointer;
transition: background 0.2s ease-in-out;
&:hover {
  transition: background 0.2s ease-in-out;
  opacity: 0.7;
}
@media screen and (max-width: 799px) {
  display: none;
}
`;

 const NavBtnLink = styled.a`
text-decoration: none;
color: hsl(0, 0%, 100%);

`;
  
const Navbar = () => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  return (
    <>
      <div className={`layer${isMobileNavOpen ? " active" : ""}`} >
      </div>
      <Nav>
      <div>
      <img style={{height:"100%"}} src={logo} alt="logo" />
      </div>
      
    <MobileNavToggle 
    className = {`hamburger${isMobileNavOpen ? " active" : ""}`}  
    onClick = {() => {
      return setIsMobileNavOpen(!isMobileNavOpen)
    }}
    >
      <span className="first bar"></span>
      <span className="second bar"></span>
    </MobileNavToggle>
   
    <div className="menu">
    <DesktopNav className='desktop-nav'>
      <NavLink><a href="/">Home</a></NavLink>
      <NavLink><a href="/">About</a></NavLink>
      <NavLink><a href="/">Contact</a></NavLink>
      <NavLink><a href="/">Blog</a></NavLink>
      <NavLink><a href="/">Careers</a></NavLink>

    </DesktopNav>
    <MobileNav className='mobile-nav' style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
      <NavLink><a href="/">Home</a></NavLink>
      <NavLink><a href="/">About</a></NavLink>
      <NavLink><a href="/">Contact</a></NavLink>
      <NavLink><a href="/">Blog</a></NavLink>
      <NavLink><a href="/">Careers</a></NavLink>

    </MobileNav>

        <NavBtn>
          <NavBtnLink to='/requestinvite'>Request Invite</NavBtnLink>
        </NavBtn>
    </div>
   
      </Nav>
    </>
  );
};
  
export default Navbar;