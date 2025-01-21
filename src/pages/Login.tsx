import type { FormProps } from "antd";
import { Form, Input } from "antd";
import React from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => (
  <div className="w-[50%]  h-[50%] mx-auto backdrop-blur-lg bg-white/30 rounded-3xl flex justify-center items-center ">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="نام کاربری"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="رمز عبور"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null} className="flex justify-start ">
        <button className="bg-gradient-to-r from-neutral-300 to-stone-400 rounded-lg h-8  w-52 flex justify-center ">
          ورود
        </button>
      </Form.Item>
    </Form>
  </div>
);

export default Login;
