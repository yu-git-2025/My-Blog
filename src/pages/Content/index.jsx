// Content.jsx
import { Markdown } from '../../components/MarkdownWithTOC';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
function Content() {
  const {blog} =useSelector(state => state.blog)
  const [params] = useSearchParams()
  const id = Number(params.get('id'))
  const blogItem = blog.find(item => item.id === id)

  return (
    <div>
      <Markdown 
        markdownText={blogItem.content}
      />
    </div>
  );
}

export default Content;