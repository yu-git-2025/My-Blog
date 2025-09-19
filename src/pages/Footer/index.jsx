import './index.css'
import { GithubOutlined } from '@ant-design/icons';
import {Button} from 'antd';

function Footer() {
    return (
        <div className='footer'>
            <div className='github-footer'>
                <Button color="primary" variant="text"
                    shape="round"
                    icon={<GithubOutlined />}
                    href="https://github.com/yu-git-2025/My-Blog"
                    target="_blank"
                >
                    github
                </Button>
            </div>
            <div className='text-footer'>
                © 2025 与
            </div>
        </div>
    )
}

export default Footer;