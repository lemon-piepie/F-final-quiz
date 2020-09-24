import React, {Component} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input } from "antd";

class addTrainee extends Component {

    cancle = () => {
        setTimeout(() => {
            location.reload();
        }, 500);
    }

    onFinish = async (data) => {
        console.log(data)
        return fetch("http://localhost:8080/trainees", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((result) => {
              alert("添加学员成功！请返回主页")
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

  render() {
    return (
        <BrowserRouter>
      <div className="addTrainee">
        <h1>添加学员</h1>
        <Form
            className="form"
            onFinish={this.onFinish}
        >
          <Form.Item
            name="name"
            validateTrigger="onBlur"
            label="姓名"
            rules={[
              {
                required:true,
                message: "此项为必填"
              }
            ]}
          >
            <Input
              className="input"
              id="username"
              name="username"
              type="text"
            />
          </Form.Item>

          <Form.Item
            name="email"
            validateTrigger="onBlur"
            label="邮箱"
            rules={[
              {
                required:true,
                message: "此项为必填"
              },{
                  pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                  message:"邮箱格式错误"
              }
            ]}
          >
            <Input
              className="input"
              id="email"
              name="email"
              type="text"
            />
          </Form.Item>

          <Form.Item
            name="office"
            validateTrigger="onBlur"
            label="办公室"
            rules={[
              {
                required:true,
                message: "此项为必填"
              }
            ]}
          >
            <Input
              className="input"
              id="office"
              name="office"
              type="text"
            />
          </Form.Item>
          
          <Form.Item
            name="zoomId"
            validateTrigger="onBlur"
            label="zoomId"
            rules={[
              {
                required:true,
                message: "此项为必填"
              }
            ]}
          >
            <Input
              className="input"
              id="zoomId"
              name="zoomId"
              type="text"
            />
          </Form.Item>

          <Form.Item
            name="github"
            validateTrigger="onBlur"
            label="github账号"
            rules={[
              {
                required:true,
                message: "此项为必填"
              }
            ]}
          >
            <Input
              className="input"
              id="github"
              name="github"
              type="text"
            />
          </Form.Item>

          <Form.Item>
            <button type="submit">提交</button>
            <Link to="/"><button type="cancle" onClick={this.cancle}>取消</button></Link>
          </Form.Item>
        </Form>
      </div>
      </BrowserRouter>
    );
  }
}

export default addTrainee;