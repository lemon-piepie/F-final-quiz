import React, {Component} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input } from "antd";
import './addTrainer.scss';

class addTrainer extends Component {

    cancle = () => {
        setTimeout(() => {
            location.reload();
        }, 500);
    }

    onFinish = async (data) => {
        console.log(data)
        return fetch("http://localhost:8080/trainers", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((result) => {
              alert("添加讲师成功！请返回主页")
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

  render() {
    return (
        <BrowserRouter>
            <div className="addTrainer">
                <div className="form">
                    <h1>添加讲师</h1>
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

                    <Form.Item>
                        <button type="submit" className="submit">提交</button>
                        <Link to="/"><button type="cancle" className="cancle" onClick={this.cancle}>取消</button></Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default addTrainer;