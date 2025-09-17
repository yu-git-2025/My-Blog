import { Avatar,Tabs,Button,Modal, Form, Input, InputNumber,Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css'
import Upload from '../../components/Upload'
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from 'react';
import { updateUserInfo } from '../../store/modules/userinfoStore';

const validateMessages = {
  required: '${label} 是必填项!',
  types: {
    email: '${label} 格式不正确!',
    number: '${label} 不是数字!',
  },
  number: {
    range: '${label} 必须处于 ${min} 与 ${max} 之间',
  },
};
    
const onTabChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: '我的作品',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: '我的收藏',
    children: '我的收藏',
  },
];
function User() {
    //userinfo : 1.username 2.avatar 3.sex 4.age 5.occupation 
    //           6.education 7.location 8.introduction 9.createDate
    const userinfo = useSelector(state => state.userinfo);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    // 创建表单实例
    const [form] = Form.useForm();

    // 当用户信息变化或模态框打开时，同步表单数据
    useEffect(() => {
        if (isModalOpen && userinfo) {
        form.setFieldsValue({
            username: userinfo.username,
            sex: userinfo.sex,
            age: userinfo.age,
            occupation: userinfo.occupation,
            education: userinfo.education,
            location: userinfo.location,
            introduction: userinfo.introduction
        });
        }
    }, [userinfo, isModalOpen, form]);
    const showModal = () => {
        setIsModalOpen(true);
    };
        // 表单提交处理函数
    const onFinish = values => {
        console.log('表单提交数据:', values);
        // 调用Redux action更新用户信息
        dispatch(updateUserInfo(values));
        // 关闭模态框
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        // 取消时重置表单
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <div className="user">
            <div className="userinfo-user-container">
                <div className="avatar-user">
                    <Avatar
                        size={80}
                        icon={<UserOutlined />}
                    />
                </div>
                <div className="text-user">
                    <div className="username-user">{userinfo.username}</div>
                    <div className="information-user">{userinfo.sex}  |  {userinfo.age}  |  {userinfo.occupation}  |  {userinfo.education}  |  {userinfo.location}</div>
                    <div className="introduction-user">{userinfo.introduction}</div>
                </div>
                <div className="edit-user">
                    <Button color="cyan"
                        variant="filled"
                        size='large'
                        onClick={showModal}>
                        编辑个人信息
                    </Button>
                    <Modal
                        title=""
                        open={isModalOpen}
                        onOk={() => form.submit()}
                        onCancel={handleCancel}
                        okButtonProps={{variant:"outlined",color:"primary"}}
                        cancelButtonProps={{variant:"outlined",color:"primary"}}
                        okText="确认"
                        cancelText="取消"
                        centered
                        closable={false}
                        destroyOnHidden={true}
                    >
                        <Form
                            form={form}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{ width: 400 }}
                            validateMessages={validateMessages}
                            clearOnDestroy={true}
                            variant='filled'
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 12 }}
                            colon={false}
                        >
                            <Form.Item name="username" label="昵称" rules={[{ required: true }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item name="sex" label="性别" >
                                <Select
                                defaultValue={userinfo.sex}
                                style={{ width: 100 }}
                                options={[
                                    { value: '男', label: '男' },
                                    { value: '女', label: '女' },
                                    ]}
                                allowClear
                                />
                            </Form.Item>
                            <Form.Item name="age" label="年龄" rules={[{ type: 'number', min: 0, max: 200 }]}>
                                <InputNumber changeOnWheel="true" max={200} min={0} suffix="岁" />
                            </Form.Item>
                            <Form.Item name="occupation" label="职业">
                                <Input/>
                            </Form.Item>
                            <Form.Item name="education" label="学历">
                                <Input/>
                            </Form.Item>
                            <Form.Item name="location" label="所在地">
                                <Input/>
                            </Form.Item>
                            <Form.Item name="introduction" label="个人介绍">
                                <Input.TextArea showCount autoSize={{ minRows: 2, maxRows: 8 }}
                                    maxLength={100} />
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
            <div className="tab-user-container">
                <div className="tab-user">
                    <Tabs defaultActiveKey="1"
                        items={items}
                        onChange={onTabChange} />
                </div>
                <div className="upload-user">
                    <Upload />
                </div>
            </div>
        </div>
    )
}

export default User;