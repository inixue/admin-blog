import React, { useState } from 'react';
import { Card, Input, Icon, Button, Spin } from 'antd';
import 'antd/dist/antd.css';
import '../Static/css/Login.css'

const Login = () => {

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const checkLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }


  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="JSPang blog system" bordered={true} style={{width: 400}}>
          <Input
            id="userName"
            size="large"
            placeholder="enter your userName"
            prefix={<Icon type="user" style={{color: "rgba(0, 0, 0, .25)"}}></Icon>}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br/><br/>
          <Input.Password
            id="password"
            size="large"
            placeholder="enter your password"
            prefix={<Icon type="key" style={{color: "rgba(0, 0, 0, .25)"}}></Icon>}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br/><br/>
          <Button type="primary" size="large" block onClick={checkLogin}>Login In</Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login;
