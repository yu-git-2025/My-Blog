import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 自定义钩子 - 处理路由与组件尺寸的关系
export const useSizeByRoute = () => {
  const location = useLocation();
  const [size, setSize] = useState('25%');

  useEffect(() => {
    const sizeMap = {
      '/': '25%',
      '/content': '17%',
    }; 
      setSize(sizeMap[location.pathname] || sizeMap['/']);
  }, [location.pathname]);

  return size;
};

// 自定义钩子 - 处理路由与组件显示的关系
export const useDisplayByRoute = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const displayMap = {
      '/': true,
      '/content': false,
      '/article': true,
      '/user': true,
    };
    
    const shouldDisplay = displayMap[location.pathname];
    
    if (shouldDisplay) {
      setDisplay(true);
      setIsExiting(false);
    } else {
      // 先触发退出动画
      setIsExiting(true);
      
      // 延时500ms后再更新display状态
      const timer = setTimeout(() => {
        setDisplay(false);
      }, 400);
      
      // 清理函数
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return { display, isExiting };
};


