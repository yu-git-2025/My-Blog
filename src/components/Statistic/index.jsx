import { Statistic, Card } from "antd";
import './index.css';

const {Timer} = Statistic;

function StatisticComponent() {

    const before = new Date('2025-09-06T17:38:00');
    const lately = new Date();
    return (
        <div className="statistic-container">
            <Card title="统计信息" variant="borderless" hoverable >
                <Statistic
                    title="总用户数"
                    value={1}
                />
                <Timer
                    type="countup"
                    title="运行时长"
                    value={before}
                    format="YY 年 DD 天 HH 时 mm 分"
                    valueStyle={{fontWeight: 'bold' , fontSize: '20px'}}
                />
                <Timer
                    type="countup"
                    title="上次更新时间"
                    value={lately}
                    format="YY 年 DD 天 HH 时 mm 分 ss 秒"
                    valueStyle={{fontWeight: 'bold' , fontSize: '20px'}}
                />
            </Card>
    
        </div>
  );
}

export default StatisticComponent;