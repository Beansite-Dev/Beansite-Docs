import { Router, Route } from 'react-router-dom';

export const SidebarItem=({ title, url })=>{
    return(<div className='sidebarItem'>
        {title}
    </div>)
}