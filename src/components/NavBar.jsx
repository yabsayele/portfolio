import React from "react";

// TODO: 
// add a hover option to the blue box underneath the nav items
// this box should appear under the one that is active
// this box should have a transition over the ones that aren't active but are currently being hovered over
// the navbar should be responsive
// 

const NavItems = [
  { name: "About Me", href: "#", current: true },
  { name: "Projects", href: "#", current: true },
  { name: "Contact Me", href: "#", current: true },
]

const NavBar = () => {
  return (
    <nav style={{top: '0', position: 'fixed', width: '100%', backgroundColor: '#E6E3D3', color: '#403F3B'}}>
      <div style={{ display: 'flex'}}>
        <h2 style={{ marginLeft: '2em' }}>YABSRA</h2>
        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '2em', alignItems: 'center' }}>
          {NavItems.map((item) => (
            <div style={{ display: 'block', margin: '10px' }}>
              <a>
                {item.name}
              </a>
              <div style={{ backgroundColor: '#92A1B3', width: 'auto', height: '0.5em' }}></div>
            </div>
            
            
          ))}
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;