import React from "react";
import './lottery-edit.css';
import LotteryEditableTable from './lottery-editable-table';

class LotteryEdit extends React.Component {
  render() {
    return (<div>
      <div className="prizes-container">
        <div className="lottery-items-header">
          <div className="lottery-item-name">奖项</div>
          <div className="lottery-item-count">数量</div>
        </div>
        <LotteryEditableTable />
      </div>

    </div>)
  }
}
export default  LotteryEdit;

