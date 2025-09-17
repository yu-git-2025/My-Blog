import { createSlice } from "@reduxjs/toolkit";

const userinfoStore = createSlice({
    name: 'userinfo',
    initialState: {
        username: '挽梦忆笙歌',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        sex: '男',
        age: 18,
        occupation: '学生',
        education: '本科',
        location: '上海',
        introduction: '一个喜欢音乐、喜欢生活、喜欢生活的人',
        createDate: '2021-09-01 12:00:00',

    },
    reducers: {
        updateUserField: (state, action) => {
            const { field, value } = action.payload;
            // 方法1：使用Object.hasOwn（推荐，现代JS语法）
            if (Object.hasOwn(state, field)) {
                state[field] = value;
            }
        },
        updateUserInfo: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                // 同样修复批量更新中的判断
                if (Object.hasOwn(state, key)) {
                    state[key] = action.payload[key];
                }
            });
        },
    }
})

export const { updateUserField, updateUserInfo } = userinfoStore.actions;

export default userinfoStore.reducer;