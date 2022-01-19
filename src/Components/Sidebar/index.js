import { useState } from 'react';

function Sidebar({ title, description, stageDesc }){

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
      };

    return ( <div 
        className="sidebar-container"
        style={{ position: 'fixed', top: '0vh', left: '0vw', 
        height: '100%', width: '280px',
        backgroundColor: '#D3EDFF', opacity: '0.9',
        padding: '30px', }} 
        onClick={toggleSidebar}>

    <h1 style={{ fontColor: 'white' }}>{title}</h1>
    <p style={{ fontColor: 'black', fontSize: '1em', textAlign: 'left' }}>{description}</p>
    <p style={{ position: 'fixed', bottom: '5vh', fontStyle: 'italic', textAlign: 'left' }}>{stageDesc}</p>
    </div>
    )
}

export default Sidebar;