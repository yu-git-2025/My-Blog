import Carousel from "../../components/Carousel"
import Statistic from "../../components/Statistic"
import "./index.css"
import { useLocation } from "react-router-dom"
import { TOC } from '../../components/MarkdownWithTOC';
import rawMD from '../../assets/React.md?raw';

function SiderRight() {
    const location = useLocation()

    const siderRightContent = () => { 
        if (location.pathname === '/') {
            return (
                <>
                    <Carousel />
                    <Statistic />
                </>
            ) 
        }
        else if (location.pathname === '/content') {
            return (
                <>
                    <TOC 
                        markdownText={rawMD}
                        tocTitle="目录"
                    />

                </>
            ) 
        }
    }

    return (
        <div className="sider-right-div">
            {siderRightContent()}
        </div>
  )
}

export default SiderRight