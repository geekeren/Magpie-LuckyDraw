import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setLotteryPool } from '../../redux/actions/lotteryPool'
import Participant from "../../model/Participant";

class LotteryPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
  }

  render() {
    return (
      <div className="lottery-pool">
        <div id="input_container">
          <textarea
            id="nameList"
            type="text"
            multiple
            defaultValue={this.props.allParticipants[0]}
            onChange={(event) => this.saveNameList(event.target.value)}
          />
          <button className="button" tabIndex="-1" autoFocus={true} onClick={this.saveNameList}>NEXT</button>
        </div>
      </div>
    );
  }

  saveNameList = (value) => {
    try {
      const allParticipants = value.split("\n")
        .filter(item => !!item || item.replace(/(^s*)|(s*$)/g, "").length !== 0)
        .map(item => Participant.fromString(item));
      this.props.setLotteryPool(allParticipants);
    } catch (err) {
      this.setState({
        error: err
      });
    }
  }
}

LotteryPool.propTypes = {
  setLotteryPool: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  allParticipants: state.dataReducer.lotteryPool.allParticipants,
});

export default connect(mapStateToProps, { setLotteryPool })(LotteryPool);