import { Layout } from 'antd';
import './index.css';
import { Outlet } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;

function LayoutPage() {
    return (
        <Layout className='layout'>
            <Header className='header'>Header</Header>
            <Layout className='layout-middle'>
                <Sider width="20%" className='sider-left'>Sider</Sider>
                <Content className='content'>
                    <Outlet />
                </Content>
                <Sider width="20%" className='sider-right'>Sider</Sider>
            </Layout>
            <Footer className='footer'>Footer</Footer>
        </Layout>
    )
}


export default LayoutPage;
