import { Layout } from 'antd';
import './index.css';
import { Outlet } from 'react-router-dom';
import SiderRight from '../Sider-Right';
import SiderLeft from '../Sider_Left'
import { useSizeByRoute, useDisplayByRoute } from '../../hooks/useModify';

const { Header, Footer, Sider, Content } = Layout;


function LayoutPage() {

    const size = useSizeByRoute();
    const {display,isExiting} = useDisplayByRoute();
    return (
        <Layout className='layout'>
            <Header className='header glass-effect'>Header</Header>
            <Layout className='layout-middle  content-enter'>
                <Sider width='15%' className='sider-left glass-effect'>
                    <SiderLeft />
                </Sider>
                <Content id="main-content" className='content glass-effect'>
                    <Outlet />
                </Content>
                <Sider width={size}   className='sider-right glass-effect'>
                    <SiderRight />
                </Sider>
            </Layout>
            {display && (<Footer className={`footer glass-effect 
                ${isExiting ? 'footer-exit' : 'footer-enter'}`} />)}
        </Layout>
    )
}


export default LayoutPage;
