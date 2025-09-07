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
