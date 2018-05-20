import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setLotteryPool } from '../../redux/actions/lotteryPool'
import Participant from "../../model/Participant";
import './lottery-pool.css'

class LotteryPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      allParticipantsInput: this.props.allParticipants.join("\n")
    }
  }

  render() {
    return (
      <div className="lottery-pool">
        <header>抽奖池设置</header>
        <div id="input_container">
          <textarea
            id="nameList"
            type="text"
            multiple
            required
            defaultValue={this.state.allParticipantsInput}
            onChange={(event) => this.onTextChange(event.target.value)}
            style={{ outlineColor: this.state.error ? '#ff5417' : '#50c617' }}
          />
          <div className={'err_msg'}>{this.state.error}</div>
        </div>
        <section className={'next-btn'}>
          <button onClick={this.saveNameList}>NEXT</button>
        </section>
      </div>
    );
  }
  next = () => {
    this.props.history.push("/lottery-draw")
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