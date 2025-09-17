
import Card from "../../components/Card"
import { Segmented } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import { setSortType } from "../../store/modules/stateStore";

function Article() {
  const {sortType} =useSelector(state => state.state)
  const dispatch = useDispatch()

  return (
    <div className="article">
      <div className="article-sort">
        <Segmented
          options={['最新发布', '最近更新']}
          defaultValue={sortType}
          size="large"
          className="article-segment"

          onChange={value => {
            dispatch(setSortType(value));
          }}
        />

        </div>    
        <Card type={sortType}/>
    </div>
  )
}

export default Article