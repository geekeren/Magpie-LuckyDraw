import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './lottery-edit.css'
import lotteryPool from "../../redux/reducers/lotteryPool";

class LotteryEdit extends React.Component {
  render() {
    return (<div>
      <table className="prizes-container">
        <thead>
        <tr>
          <th>奖项</th>
          <th>数量</th>
        </tr>

        </thead>

        <tbody>
        {
          this.lotteryItems(this.props.lotteries)
        }
        </tbody>
      </table>

    </div>)
  }

  lotteryItems = (lotteries) => {
    return lotteries.map(lottery => (<tr key={lottery.id}>
      <td>{lottery.title}</td>
      <td>{lottery.totalCount}</td>
    </tr>))
  }

}

LotteryEdit.PropTypes = {
  lotteries: PropTypes.array
}
const mapStateToProps = state => ({
  lotteries: state.dataReducer.lotteryDrawing.setting
});

export default connect(mapStateToProps)(LotteryEdit);

