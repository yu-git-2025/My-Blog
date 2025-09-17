import { Timeline } from 'antd';
import { SmileOutlined  } from '@ant-design/icons';
import './index.css';

function TimelineComponent() {
    return (
        <div className="timeline-container">
            <Timeline
                items={[
                {
                    color: 'green',
                    children: (
                    <>
                        <p>发布第一篇文章</p>
                        <p>2025-09-03</p>
                    </>
                    ),
                },
                {
                    color: 'green',
                    children: (
                    <>
                        <p>发布第二篇文章</p>
                        <p>2025-09-05</p>
                    </>
                    ),
                },
                {
                    color: 'red',
                    children: (
                    <>
                        <p>发布第三篇文章</p>
                        <p>2025-09-06</p>
                    </>
                    ),
                },
                {
                    color: 'gray',
                    children: (
                    <>
                        <p>发布第四篇文章</p>
                        <p>2025-09-08</p>
                    </>
                    ),
                },
                {
                    color: '#00CCFF',
                    dot: <SmileOutlined />,
                    children: (
                    <>
                        <p>发布第五篇文章</p>
                        <p>2025-09-11</p>
                    </>
                    ),
                },
                ]}
            />
        </div>
    );
}

export default TimelineComponent;