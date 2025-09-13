// components/MarkdownWithTOC.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import useMarkdownTOC from '../../hooks/useMarkdownTOC';
import TOCSidebar from '../TOCSidebar';
import './index.css';
import 'highlight.js/styles/github.css';
import 'github-markdown-css';

export const Markdown = ({ 
  markdownText, 
}) => {
  const {renderHeading } = useMarkdownTOC(markdownText,document.getElementById('main-content'));

  return (
    <div className="markdown-body content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: (props) => renderHeading(1, props),
          h2: (props) => renderHeading(2, props),
          h3: (props) => renderHeading(3, props),
          h4: (props) => renderHeading(4, props),
          h5: (props) => renderHeading(5, props),
          h6: (props) => renderHeading(6, props)
        }}
      >
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};


export const TOC = ({ 
  markdownText, 
  tocTitle = "目录",
}) => {
  const { headings, activeId, scrollToAnchor } = useMarkdownTOC(markdownText,document.getElementById('main-content'));

  return (
      <div className="sidebar" >
        <TOCSidebar 
          headings={headings} 
          activeId={activeId} 
          onItemClick={scrollToAnchor}
          title={tocTitle}
        />
      </div> 
  );
};
