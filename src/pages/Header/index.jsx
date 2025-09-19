import './index.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const items = [
  {
    key: '1',
    label: (
      <Link to="/user">个人中心</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/about">未完待续</Link>
    ),
    disabled: true,
  },
];
function Header() {
  const userinfo = useSelector(state => state.userinfo)
  
    return (
        <div className="header">
            <div className="header-title">
          <span style={{ fontWeight: '600',fontSize: '1.9em',color:'rgba(57, 57, 57, 0.801)' }}>{userinfo.username}</span>的博客
            </div>
            <div className="header-avatar">
                <Dropdown menu={{ items }}
                    placement="bottom"
                    overlayClassName="header-dropdown-menu">
                    <Avatar
                        size={40}
                        shape="square"
                        // 有头像时显示图片，无则不设置src（自动使用icon）
                        src={userinfo?.avatar || undefined} 
                        // 默认图标（无头像或加载失败时显示）
                        icon={<UserOutlined />}
                        // 无障碍访问：添加alt文本
                        alt={userinfo?.username || '用户头像'}
                    />
                </Dropdown>
                <div className="header-username">{userinfo.username}</div>
            </div>
        </div>
    )
}

export default Header;