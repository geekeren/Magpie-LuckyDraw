import React from "react";
import { render } from "react-dom";
import './lottery-edit.css'

class LotteryEdit extends React.Component {
  render() {
    return (<div>
      <table className="prizes-container">
        <thead>
          <td>奖项</td>
          <td>数量</td>
        </thead>
        <tbody>
          <tr>
            <td>幸运奖</td>
            <td>3</td>
          </tr>
          <tr>
            <td>三等奖</td>
            <td>2</td>
          </tr>
          <tr>
            <td>二等奖</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>


    </div>)
  }
}

export default LotteryEdit

