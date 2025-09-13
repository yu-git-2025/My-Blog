import { useNavigate } from "react-router-dom"
import './index.css'
import { useSelector } from "react-redux";

function CardComponent() {
    const {blog} =useSelector(state => state.blog)
    const navigate = useNavigate()

    return (
        <div className='card-container'>
            {blog.map(item =>
                <div
                    className='card' key={item.id}
                    onClick={() => navigate('/content?id=' + item.id)}>
                    <div className='card-title'>{item.title}</div>
                    <div className='card-description'>{item.description}</div>
                    <div className='card-message'>
                        <div className='card-time card-style'>{item.creatTime }</div>
                        <div className='card-author card-style'>{item.author }</div>
                        <div className='card-words card-style'>2000字</div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default CardComponent;