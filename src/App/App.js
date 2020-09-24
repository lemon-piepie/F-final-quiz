import React, { Component } from 'react';
import './App.scss';
import Group from '../Components/Group';

class App extends Component {
  state = {
    showGroup:false,
    trainees:[],
    trainers:[],
  }
  
  componentDidMount(){
    const TraineeUrl = 'http://localhost:8080/trainees';
    const TrainerUrl = 'http://localhost:8080/trainers';
    this.fetchData(TraineeUrl)
      .then((result) => {
        this.setState({
          trainees: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
    this.fetchData(TrainerUrl)
      .then((result) => {
        this.setState({
          trainers: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
  }

  fetchData = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange =  () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  };

  addData = (event) => {
    if(event.keyCode === 13) {
      console.log("enter");
    }
  }

  showGroupList = () => {
    this.setState({
      showGroup:true,
    })
  }
  
  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="first-line">
            <h1>分组列表</h1>
            <button onClick={this.showGroupList}>分组学员</button>
          </div>
          <div className={this.state.showGroup?'groupListShow':'groupListHide'}>
            <Group num="1组" />
            <Group num="2组" />
            <Group num="3组" />
          </div>          
        </section>
        <section>
          <h1>讲师列表</h1>
          <div className="all-data">
            <ul>
                {this.state.trainers.map((trainer) => (
                  <li>{trainer.id}. {trainer.name}</li>
                ))}             
                <input type="text" placeholder="+添加讲师" onKeyDown={this.addTrainer}/>
              </ul>
          </div>
        </section>
        <section>
          <h1>学员列表</h1>
          <div className="all-data">
            <ul>
                {this.state.trainees.map((trainee) => (
                  <li>{trainee.id}. {trainee.name}</li>
                ))}             
                <input type="text" placeholder="+添加学员" onKeyDown={this.addTrainee}/>
              </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
