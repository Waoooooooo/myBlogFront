import React, { useState } from 'react';
import { Button, Modal, message, Input, Form, Checkbox } from 'antd';
import './Login.less'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import type userState from '../features/user/userSlice'
import  {login} from '../features/user/userSlice'



const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  //用户id
  const userId = useSelector<userState>(state =>  state.user.userId)
  //用户的昵称
  const nickname = useSelector<userState>(state =>  state.user.nickname)
  const lastOnlineTime = useSelector<userState>(state =>  state.user.lastOnlineTime)

  const dispatch =  useDispatch()

  console.log("rerender之后",userId,nickname,lastOnlineTime);


  //message的hooks调用
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  console.log("当前的全局状态是:",userId,nickname,lastOnlineTime);

  const onFinish = (values: any) => {

    //点击之后设置加载状态
    setConfirmLoading(true);
    // message.success('登录111')
    console.log(form);
    form
    //响应后结束模态框
    axios.post("api/login", {
      ...values
    }).then((res) => {
      messageApi.success('登录成功');
      console.log("请求的数据", res.data);
      debugger
      dispatch(login(res.data))
      setOpen(false);
      setConfirmLoading(false);
    }).catch((err)=>{
      messageApi.error("登录失败,请重新登录")
      setConfirmLoading(false);
    });
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    form.resetFields()
  };


  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        登录
      </Button>

      <Modal
        title="欢迎登录"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="登录"
        cancelText="取消"
        className='login-window'
        width={350}
        footer=""
      >

        <Form
          name="user"
          layout={"vertical"}
          style={{
            maxWidth: 600,
          }}
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >

          <Form.Item label="用户名" name='username'>
            <Input type="text" placeholder='请输入用户名' />
          </Form.Item>
          <Form.Item label="密码" name='password'>
            <Input type="password" placeholder='请输入密码' />
          </Form.Item>
          <Form.Item className='about-password'>
            <Form.Item name="remember" valuePropName="checked"  className="login-form-remember" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
              <Link to="/" className="login-form-forgot">忘记密码</Link>
          </Form.Item>
          <div className='ant-modal-footer'>
            <Button type="primary" htmlType="submit" >
              登录
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default App;
