import { Card } from 'antd';
import { useNavigate } from "react-router-dom"
import './index.css'

const { Meta } = Card;

const cardData = [
    {
        id: 1,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 2,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 3,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 4,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 5,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 6,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },
    {
        id: 7,
        title: '小号卡片头部文字大小',
        description: '定义容器类名的样式',
    },

]

function CardComponent() {
    const navigate = useNavigate()

    return (
        <div className='card-container'>
            {cardData.map(item =>
                <Card size="small" hoverable
                    className='card' key={item.id}
                    onClick={() => navigate('/content?id=' + item.id)}>
                    <Meta title={item.title} description={item.description} />
                </Card>
            )}
        </div>
        
    )
}

export default CardComponent;