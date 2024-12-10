import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../util/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await loginApi(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "Login user",
        description: "Success",
      });
      navigate("/");
    } else {
      notification.error({
        message: "Login user error",
        description: res?.EM ?? "Error",
      });
    }

    if (res) console.log("Success:", res);
    // console.log("Success:", res);
  };

  return (
    <div style={{ margin: 50 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
