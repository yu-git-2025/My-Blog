import { useNavigate } from "react-router-dom"
import './index.css'
import { useSelector } from "react-redux";
import { useState,useEffect} from "react";

function CardComponent({type }) {
    const { blog } = useSelector(state => state.blog)
    const [data, setData] = useState(blog);
    
      // 仅当 type 或 blog 变化时，重新排序
  useEffect(() => {
    let tempData = [...blog]; // 深拷贝博客数据
    if (type === '最新发布') {
      // 按创建时间降序
      tempData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    } else if (type === '最近更新') {
      // 按访问量降序
      tempData.sort((a, b) => new Date(b.updateDate) - new Date(a.updateDate));
    }
    setData(tempData);
  }, [type, blog]); // 依赖项：type 切换或 blog 数据更新时触发
    
    const navigate = useNavigate()

    return (
        <div className='card-container'>
            {data.map(item =>
                <div
                    className='card' key={item.id}
                    onClick={() => navigate('/content?id=' + item.id)}>
                    <div className='card-title'>{item.title}</div>
                    <div className='card-description'>{item.description}</div>
                    <div className='card-message'>
                        <div className='card-createdata card-style'>发布时间: {item.createDate }</div>
                        <div className='card-updatedata card-style'>更新时间: {item.updateDate }</div>
                        <div className='card-words card-style'>????字</div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default CardComponent;