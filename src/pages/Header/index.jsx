import './index.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { useSelector } from 'react-redux';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
];
function Header() {
  const userinfo = useSelector(state => state.userinfo)
  
    return (
        <div className="header">
            <div className="title">
                React+Vite
            </div>
            <div className="avatar">
                <Dropdown menu={{ items }}
                    placement="bottom"
                    overlayClassName="dropdown-menu">
                    <Avatar
                        size={40}
                        shape="square"
                        icon={<UserOutlined />}
                    />
                </Dropdown>
              <div className="username">{userinfo.username}</div>
            </div>
        </div>
    )
}

export default Header;