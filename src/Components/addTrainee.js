import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, message } from 'antd';
import './addTrainee.scss';

// TODO class命名需要大写开头
class addTrainee extends Component {
  // TODO function命名可以更具体
  cancle = () => {
    setTimeout(() => {
      location.reload();
    }, 500);
  };

  // TODO 使用了async但是里面没有用await，没有意义
  onFinish = async (data) => {
    console.log(data);
    return (
      fetch('http://localhost:8080/trainees', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      })
        // TODO 不需要这一层then
        // TODO 创建成功也需要返回列表页
        .then((result) => {
          message.info('添加学员成功！请返回主页');
        })
        .catch((error) => {
          console.log(error.message);
        })
    );
  };

  render() {
    return (
      // TODO BrowserRouter不是这么用的，这里不需要了
      // TODO 注意缩进
      <BrowserRouter>
        {/* TODO className命名是a-b-c  */}
        {/* TODO 多使用语义化标签 */}
        <div className="addTrainee">
          <div className="form">
            <h1>添加学员</h1>
            {/* TODO 内外层不要使用同样的className */}
            <Form className="form" onFinish={this.onFinish}>
              <Form.Item
                name="name"
                validateTrigger="onBlur"
                label="姓名"
                rules={[
                  {
                    required: true,
                    message: '此项为必填',
                  },
                ]}
              >
                <Input className="input" id="username" name="username" type="text" />
              </Form.Item>

              <Form.Item
                name="email"
                validateTrigger="onBlur"
                label="邮箱"
                rules={[
                  {
                    required: true,
                    message: '此项为必填',
                  },
                  {
                    pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    message: '邮箱格式错误',
                  },
                ]}
              >
                <Input className="input" id="email" name="email" type="text" />
              </Form.Item>

              <Form.Item
                name="office"
                validateTrigger="onBlur"
                label="办公室"
                rules={[
                  {
                    required: true,
                    message: '此项为必填',
                  },
                ]}
              >
                <Input className="input" id="office" name="office" type="text" />
              </Form.Item>

              <Form.Item
                name="zoomId"
                validateTrigger="onBlur"
                label="zoomId"
                rules={[
                  {
                    required: true,
                    message: '此项为必填',
                  },
                ]}
              >
                <Input className="input" id="zoomId" name="zoomId" type="text" />
              </Form.Item>

              <Form.Item
                name="github"
                validateTrigger="onBlur"
                label="github账号"
                rules={[
                  {
                    required: true,
                    message: '此项为必填',
                  },
                ]}
              >
                <Input className="input" id="github" name="github" type="text" />
              </Form.Item>

              <Form.Item>
                <button type="submit" className="submit">
                  提交
                </button>
                <Link to="/">
                  <button type="cancle" className="cancle" onClick={this.cancle}>
                    取消
                  </button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default addTrainee;
