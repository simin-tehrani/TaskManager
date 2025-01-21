import UseFormHook from "./../Hooks/useForm";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const { TextArea } = Input;
const { Option } = Select;

const TaskForm: React.FC = () => {
  const { handleSubmit, onSubmit, control } = UseFormHook();

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className="w-[50%] mx-auto backdrop-blur-lg bg-white/30 rounded-3xl grid grid-cols-1 items-center justify-items-center"
      labelAlign="right"
      style={{ direction: "rtl" }}
    >
      <Form.Item label="عنوان" className=" w-2/3 h-12 mt-10" labelAlign="right">
        <Controller
          name="title"
          control={control}
          rules={{
            required: "پر کردن این فیلد الزامی است",
            pattern: {
              value: /^[A-Za-z0-9\s]+$/,
              message: "عنوان فقط می‌تواند شامل حروف و اعداد باشد",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                placeholder="عنوان"
                className=" border-sky-600 shadow-gray-600 h-10 "
              />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item
        label="توضیحات"
        className=" w-2/3 h-12  mt-5 border-l-pink-800"
        labelAlign="right"
      >
        <Controller
          name="description"
          control={control}
          rules={{
            required: "پر کردن این فیلد الزامی است",
            pattern: {
              value: /^[A-Za-z0-9\s]+$/,
              message: "توضیحات فقط می‌تواند شامل حروف و اعداد باشد",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <TextArea
                {...field}
                rows={4}
                placeholder="توضیحات"
                className=" border-sky-600 shadow-gray-600 h-10 "
              />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="تاریخ شروع" className=" w-2/3 h-12 mt-20">
        <Controller
          name="startDate"
          control={control}
          rules={{ required: "پر کردن این فیلد الزامی است" }}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                placeholder="تاریخ شروع"
                className=" border-sky-600 shadow-gray-600 h-10 "
              />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item
        label="تاریخ پایان"
        className=" w-2/3 h-12 mt-8"
        labelAlign="right"
      >
        <Controller
          name="endDate"
          control={control}
          rules={{ required: "پر کردن این فیلد الزامی است" }}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                placeholder="تاریخ پایان"
                className=" border-sky-600 shadow-gray-600 h-10 "
              />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="وضعیت" className=" w-2/3 h-12 mt-5">
        <Controller
          name="status"
          control={control}
          rules={{ required: "پر کردن این فیلد الزامی است" }}
          render={({ field, fieldState }) => (
            <>
              <Select
                {...field}
                onChange={(value) => field.onChange(value)}
                placeholder="انتخاب وضعیت"
              >
                <Option value="تکمیل شده">تکمیل شده</Option>
                <Option value="درحال انجام">درحال انجام</Option>
              </Select>
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item className="mt-8">
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
          افزودن وظیفه
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
