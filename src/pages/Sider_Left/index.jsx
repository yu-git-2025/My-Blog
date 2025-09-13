import './index.css'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Menu = () => { 
    const location = useLocation();
    const navigate = useNavigate()
    const [route, setRoute] = useState('/');
    useEffect(() => { 
        setRoute(location.pathname)
    }, [location.pathname]);
    return (
        <div className="menu">
            <div className={`menu-item ${route === '/' ? 'active' : ''}`} onClick={() => navigate('/')}>
                首页
            </div>
            <div className={`menu-item ${route === '/user' ? 'active' : ''}`} onClick={() => navigate('/user')}> 
                我的
            </div>
        </div>
    )
}

function SiderLeft() {
    return (
        <>
            <Menu />
        </>
    )
}

export default SiderLeft;