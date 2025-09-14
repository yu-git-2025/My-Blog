
import Card from "../../components/Card"
import { Segmented } from 'antd';
import { useState } from "react";
import './index.css'


function Article() {
  const [type, setType]=useState('最新');

  return (
    <div className="article">
      <div className="article-sort">
        <Segmented
          options={['最新', '热门']}
          defaultValue="最新"
          size="large"
          className="article-segment"

          onChange={value => {
            setType(value);
          }}
        />

        </div>    
        <Card type={type}/>
    </div>
  )
}

export default Article