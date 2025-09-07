import { Layout } from 'antd';
import './index.css';
import { Outlet } from 'react-router-dom';
import SiderRight from '../Sider-Right';
import { useSizeByRoute } from '../../utils/CustomHook/useSizeByRoute';

const { Header, Footer, Sider, Content } = Layout;

function LayoutPage() {

    const size = useSizeByRoute();
    return (
        <Layout className='layout'>
            <Header className='header glass-effect'>Header</Header>
            <Layout className='layout-middle'>
                <Sider width="25%" className='sider-left glass-effect'>Sider</Sider>
                <Content className='content glass-effect'>
                    <Outlet />
                </Content>
                <Sider width={size}   className='sider-right glass-effect'>
                    <SiderRight />
                </Sider>
            </Layout>
            <Footer className='footer glass-effect'>Footer</Footer>
        </Layout>
    )
}


export default LayoutPage;
