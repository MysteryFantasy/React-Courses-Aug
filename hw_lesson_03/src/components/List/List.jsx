import React, { Component } from "react";
import "./style.sass"
import Button from './Button';

export default class List extends Component {
  state = {
    list: [
      {
        id: 1,
        title: `Task 1`
      },
      {
        id: 2,
        title: `Task 2`
      },
      {
        id: 3,
        title: `Task 3`
      },
      {
        id: 4,
        title: `Task 4`
      },
      {
        id: 5,
        title: `Task 5`
      },
      {
        id: 6,
        title: `Task 6`
      },
      {
        id: 7,
        title: `Task 7`
      },
      {
        id: 8,
        title: `Task 8`
      },
      {
        id: 9,
        title: `Task 9`
      },
      {
        id: 10,
        title: `Task 10`
      }
    ],
    secondList: [],
    thirdList: []
  };

  transferFirstItemToBlock2 = () => {
    this.setState((prevState) => ({
      secondList: [prevState.list[0], ...prevState.secondList],
      list: prevState.list.slice(1)
    }));
  }
  transferFirstItemBackToBlock1 = () => {
    this.setState((prevState) => ({
      list: [prevState.secondList[0], ...prevState.list],
      secondList: prevState.secondList.slice(1),
    }));
  }
  transferFirstItemToBlock3 = () => {
    this.setState((prevState) => ({
      thirdList: [prevState.secondList[0], ...prevState.thirdList],
      secondList: prevState.secondList.slice(1)
    }));
  }
  removeLastItemFromBlock3 = () => {
    this.setState((prevState) => ({
      thirdList: prevState.thirdList.slice(0, -1),
    }));
  }

  render() {
    let {list = []} = this.state;

    return <div className="block">
      <div className="block__list">
        {list.map((item, index) => <ul key={index}>
          {Object
            .keys(item)
            .filter(k => k !== `id`)
            .map((k, i) => <li key={i}>{item[k]}
          </li>)}
        </ul>)}
        {list.length
        ? <Button className="block__btn" buttonAction={this.transferFirstItemToBlock2} buttonText="Transfer first to right"/>
        :null}
      </div>
      <div className="block__list">
        {this.state.secondList.map((item, index) => <ul key={index}>
          {Object
            .keys(item)
            .filter(k => k !== `id`)
            .map((k, i) => <li key={i}>{item[k]}
          </li>)}
        </ul>)}
        {this.state.secondList.length
        ? <div className="block__btn" >
            <Button buttonAction={this.transferFirstItemBackToBlock1} buttonText="Transfer first to left"/>
            <Button buttonAction={this.transferFirstItemToBlock3} buttonText="Transfer first to right"/>
          </div>
        :null}
      </div>
      <div className="block__list">
        {this.state.thirdList.map((item, index) => <ul key={index}>
          {Object
            .keys(item)
            .filter(k => k !== `id`)
            .map((k, i) => <li key={i}>{item[k]}
          </li>)}
        </ul>)}
        {this.state.thirdList.length 
        ? <Button className="block__btn" buttonAction={this.removeLastItemFromBlock3} buttonText="Remove last item"/>
        :null}
      </div>
    </div>
  } 
}