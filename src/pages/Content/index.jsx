// Content.jsx
import {Markdown} from '../../components/MarkdownWithTOC';
import rawMD from '../../assets/React.md?raw';
// ...其他导入

function Content() {

  return (
    <div>
      <Markdown 
        markdownText={rawMD}
      />
    </div>
  );
}

export default Content;