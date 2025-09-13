import Carousel from "../../components/Carousel"
import Statistic from "../../components/Statistic"
import "./index.css"
import { useLocation } from "react-router-dom"
import { TOC } from '../../components/MarkdownWithTOC';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SiderRight() {
    const location = useLocation()
    const {blog} =useSelector(state => state.blog)
    const [params] = useSearchParams()
    const id = Number(params.get('id'))
    const blogItem = blog.find(item => item.id === id)
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
                        markdownText={blogItem.content}
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