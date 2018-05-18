import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setLotteryPool } from '../../redux/actions/lotteryPool'
import Participant from "../../model/Participant";
import './lottery-setting.css'
import LotteryEdit from "../lottery-edit/index";

class LotteryPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      allParticipantsInput: ''
    }
  }

  render() {
    return (
      <div className="lottery-setting">
        <header>奖项设置</header>
        <section className="lottery-edit">
          <LotteryEdit/>
        </section>
        <section className={'next-btn'}>
          <button onClick={this.next}>NEXT</button>
        </section>
      </div>
    );
  }
  next = () => {
    this.props.history.push("/lottery-pool")
  }
  verifyParticipantsInput = (value) => {
    return new Promise((resolve, reject) => {
      try {
        const allParticipants = value.split("\n")
          .filter(item => !!item || item.replace(/(^s*)|(s*$)/g, "").length !== 0)
          .map(item => Participant.fromString(item));
        resolve(allParticipants);
      } catch (err) {
        reject(err)
      }
    });

  }
  onTextChange = (value) => {
    this.setState({
      allParticipantsInput: value,
    }, () => {
      this.verifyParticipantsInput(this.state.allParticipantsInput)
        .then(() => {
          this.setState({
            error: ''
          });
        })
        .catch(error => {
          this.setState({
            error: error.message
          });
        })
    })
  };

  saveNameList = () => {
    this.verifyParticipantsInput(this.state.allParticipantsInput)
      .then(allParticipants => {
        this.props.setLotteryPool(allParticipants)
        this.props.history.push("/lottery-drawing");
      })
      .catch(error => {
        this.setState({
          error
        });
      })
  }
}

LotteryPool.propTypes = {
  setLotteryPool: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  allParticipants: state.dataReducer.lotteryPool.allParticipants,
});

export default connect(mapStateToProps, { setLotteryPool })(LotteryPool);