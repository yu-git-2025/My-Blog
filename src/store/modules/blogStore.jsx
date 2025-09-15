//src\store\modules\counterStore.jsx
import { createSlice } from "@reduxjs/toolkit";
import ReactMD from '../../assets/React.md?raw';
import VRMD from '../../assets/如何在Vite.js+React项目中渲染Markdown 文件.md?raw';
import NodejsMD from '../../assets/Node.js版本管理问题.md?raw';
import MQMD from '../../assets/消息队列.md?raw';
import MYSQLMD from '../../assets/MYSQL.md?raw';
import SpringbootMD from '../../assets/Springboot框架.md?raw';
import JavaMD from '../../assets/Java.md?raw';
import RedisMD from '../../assets/Redis.md?raw';
import TuMD from '../../assets/流程图.md?raw';

const blogStore = createSlice({
    name: "blog",
    //初始化state
    initialState: {
        blog: [
            {
                id: 1,
                title: 'React 快速上手',
                description: 'React 是一个用于构建用户界面的 JavaScript 库。本篇文章主要讲述 React 的基本用法。',
                content: ReactMD,
                createDate: '2025-08-31',
                author: 'yu',
                visits:13,
            },
            {
                id: 2,
                title: '如何在Vite.js+React项目中渲染Markdown 文件',
                description: '本篇文章主要讲述了在Vite.js+React项目中如何渲染Markdown 文件的方法。',
                content: VRMD,
                createDate: '2025-09-07',
                author: 'yu',
                visits: 1,
            },
            {
                id: 3,
                title: 'Node.js版本管理问题',
                description: '本篇文章主要讲述了关于Node.js版本管理相关问题',
                content: NodejsMD,
                createDate: '2025-09-08',
                author: 'yu',
                visits: 15,
            },
            {
                id: 4,
                title: '消息队列',
                description: '本篇文章主要讲述了消息队列的相关内容',
                content: MQMD,
                createDate: '2025-05-16',
                author: 'yu',
                visits: 10,
            },
            {
                id: 5,
                title: 'MYSQL',
                description: '本篇文章主要讲述了MYSQL的相关内容',
                content: MYSQLMD,
                createDate: '2025-05-16',
                author: 'yu',
                visits: 10,
            },
            {
                id: 6,
                title: 'Springboot框架',
                description: '本篇文章主要讲述了Springboot框架的相关内容',
                content: SpringbootMD,
                createDate: '2025-03-16',
                author: 'yu',
                visits: 123,
            },
            {
                id: 7,
                title: 'Java',
                description: '本篇文章主要讲述了Java的相关内容',
                content: JavaMD,
                createDate: '2025-04-16',
                author: 'yu',
                visits: 56,
            },
            {
                id: 8,
                title: 'Redis',
                description: '本篇文章主要讲述了Redis的相关内容',
                content: RedisMD,
                createDate: '2025-05-16',
                author: 'yu',
                visits: 23,
            },
            {
                id: 9,
                title: '流程图',
                description: '本篇文章主要讲述了流程图',
                content: TuMD,
                createDate: '2025-10-03',
                author: 'yu',
                visits: 6,
            },

        ]
    },
    //修改状态的方法  同步方法  支持直接修改
    reducers: {

    }
})


//获取reducer
const reducer = blogStore.reducer

//按需导出actionCreater函数

// 默认导出reducer
export default reducer