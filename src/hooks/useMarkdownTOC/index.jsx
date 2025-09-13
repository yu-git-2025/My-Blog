import { useState, useEffect, useRef, useCallback } from 'react';
import React from 'react';

// 生成唯一ID - 处理特殊字符
const generateUniqueId = (text, index) => {
  if (typeof text !== 'string') {
    if (Array.isArray(text)) {
      text = text.join('');
    } else {
      text = String(text);
    }
  }
  
  // 移除Markdown代码标记
  text = text.replace(/`/g, '');
  
  const baseId = text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
  
  // 添加索引确保唯一性
  return baseId ? `${baseId}-${index}` : `heading-${index}`;
};

// 从Markdown文本中提取标题（排除代码块中的内容）
const extractHeadingsFromMarkdown = (markdownText) => {
  const headings = [];
  let inCodeBlock = false;
  let index = 0;
  
  // 按行分割Markdown文本
  const lines = markdownText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 检测代码块开始和结束
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    // 如果不在代码块中，检查是否为标题
    if (!inCodeBlock && line.startsWith('#')) {
      // 匹配标题格式
      const match = line.match(/^(#+)\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        let text = match[2].trim();
        
        // 排除特殊情况（如注释中的#号）
        if (level <= 6 && text.length > 0) {
          // 移除Markdown代码标记，但保留文本内容
          text = text.replace(/`/g, '');
          const id = generateUniqueId(text, index);
          headings.push({ level, text, id, index });
          index++;
        }
      }
    }
  }
  
  return headings;
};

// 防抖函数
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// 自定义Hook - 新增scrollContainer参数
const useMarkdownTOC = (markdownText, scrollContainer) => {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState([]);
  const isScrollingRef = useRef(false);
  const scrollEndTimerRef = useRef(null);
  const headingElementsRef = useRef(new Map());
  // 确定实际的滚动容器（优先使用传入的Content容器，否则回退到window）
  const container = scrollContainer || window;

  // 从Markdown文本中提取标题
  useEffect(() => {
    const foundHeadings = extractHeadingsFromMarkdown(markdownText);
    setHeadings(foundHeadings);
  }, [markdownText]);

  // 平滑滚动到指定锚点 - 适配Content容器
  const scrollToAnchor = useCallback((id) => {
    if (!container) return;
    
    // 设置滚动标记
    isScrollingRef.current = true;
    
    const element = document.getElementById(id);
    if (element) {
      // 计算元素相对于滚动容器的位置
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      // 计算偏移位置（考虑滚动容器本身的偏移和导航栏高度）
      const offset = 25;
      const offsetPosition = (elementRect.top - containerRect.top) + container.scrollTop - offset;

      // 使用容器的scrollTo方法（代替window.scrollTo）
      container.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(id);
      
      // 清除之前的滚动结束计时器
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
      
      // 监听滚动结束 - 绑定到容器上
      const handleScrollEnd = () => {
        isScrollingRef.current = false;
        container.removeEventListener('scroll', scrollEndHandler);
      };
      
      // 创建防抖的滚动结束处理器
      const scrollEndHandler = debounce(handleScrollEnd, 100);
      container.addEventListener('scroll', scrollEndHandler);
      
      // 设置超时作为备用，确保滚动标记最终会被清除
      scrollEndTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        container.removeEventListener('scroll', scrollEndHandler);
      }, 1500);
    } else {
      // 如果找不到元素，尝试查找近似ID
      console.warn(`Element with id ${id} not found, trying to find similar...`);
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let foundElement = null;
      
      for (let i = 0; i < allHeadings.length; i++) {
        const heading = allHeadings[i];
        if (heading.id && heading.id.includes(id.replace(/\d+$/, ''))) {
          foundElement = heading;
          break;
        }
      }
      
      if (foundElement) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = foundElement.getBoundingClientRect();
        const offset = 10;
        const offsetPosition = (elementRect.top - containerRect.top) + container.scrollTop - offset;

        container.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveId(foundElement.id);
      }
    }
  }, [container]);

  // 监听滚动，自动高亮当前章节 - 适配Content容器
  useEffect(() => {
    if (!container) return;
    
    // 获取所有标题元素
    const updateHeadingElements = () => {
      headingElementsRef.current.clear();
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          headingElementsRef.current.set(heading.id, element);
        }
      });
    };
    
    // 初始更新
    updateHeadingElements();
    
    // 延迟再次更新，确保DOM已渲染
    setTimeout(updateHeadingElements, 300);
    
    const handleScroll = debounce(() => {
      // 如果正在手动滚动，则不处理自动高亮
      if (isScrollingRef.current) return;
      
      // 获取容器的滚动位置（window用scrollY，DOM元素用scrollTop）
      const scrollPosition = container === window 
        ? container.scrollY + 50 
        : container.scrollTop + 50;
      
      let closestHeading = null;
      let minDistance = Infinity;
      
      // 遍历所有标题元素，找到最接近容器顶部的标题
      headingElementsRef.current.forEach((element, id) => {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        // 计算元素相对于容器的顶部位置
        const elementTop = (elementRect.top - containerRect.top) + container.scrollTop;
        const distance = Math.abs(elementTop - scrollPosition);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestHeading = id;
        }
      });
      
      if (closestHeading && closestHeading !== activeId) {
        setActiveId(closestHeading);
      }
    }, 50);
    
    // 在容器上添加滚动监听（代替window）
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [headings, activeId, container]);

  // 处理ReactMarkdown渲染的标题
  const renderHeading = useCallback((level, props) => {
    // 将children转换为纯文本
    const getTextContent = (children) => {
      if (typeof children === 'string') {
        return children;
      } else if (Array.isArray(children)) {
        return children.map(child => getTextContent(child)).join('');
      } else if (children && children.props) {
        return getTextContent(children.props.children);
      }
      return '';
    };
    
    const textContent = getTextContent(props.children);
    const cleanText = textContent.replace(/`/g, ''); // 移除反引号
    
    // 查找匹配的标题
    const heading = headings.find(h => 
      h.text === cleanText || 
      h.text.replace(/`/g, '') === cleanText
    );
    
    const id = heading ? heading.id : generateUniqueId(cleanText, 0);
    
    const HeadingTag = `h${level}`;
    return React.createElement(HeadingTag, { id, ...props });
  }, [headings]);

  return {
    headings,
    activeId,
    scrollToAnchor,
    renderHeading
  };
};

export default useMarkdownTOC;
