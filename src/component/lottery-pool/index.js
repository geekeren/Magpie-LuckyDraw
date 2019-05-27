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
      error: props.allParticipants && props.allParticipants.length > 0 ? '' : '抽奖池为空！',
      allParticipantsInput: this.props.allParticipants.map(participant => Participant.participantToString(participant)).join("\n")
    }
  }

  componentDidMount() {
    this.verifyParticipants();
  }

  render() {
    return (
      <div className="lottery-pool">
        <header>抽奖池设置</header>
        <section>每一行表示一名参与者（格式：‘姓名 手机号’）</section>
        <div id="input_container">
          <textarea
            id="nameList"
            type="text"
            multiple
            required
            placeholder="郭晓 13800138000"
            defaultValue={this.state.allParticipantsInput}
            onChange={(event) => this.onTextChange(event.target.value)}
            style={{ outlineColor: this.state.error ? '#ff5417' : '#50c617' }}
          />
          <div className={'notice_msg'}>
            {this.state.error && <span className={'err_msg'}>{this.state.error}</span>}
            {this.state.validParticipantCount &&
            <div>参与者总数：{this.state.validParticipantCount}</div>
            }
          </div>
        </div>
        <section className={'next-btn'}>
          <button disabled={!!this.state.error} className={!!this.state.error ? "disable" : ''}
                  onClick={this.saveNameList}>NEXT
          </button>
        </section>
      </div>
    );
  }

  next = () => {
    this.props.history.push("/lottery-setting");
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
      this.verifyParticipants();
    })
  };
  saveNameList = () => {
    this.verifyParticipantsInput(this.state.allParticipantsInput)
      .then(allParticipants => {
        this.props.setLotteryPool(allParticipants);
        this.next();
      })
      .catch(error => {
        this.setState({
          error
        });
      })
  }

  verifyParticipants() {
    this.verifyParticipantsInput(this.state.allParticipantsInput)
      .then((allParticipants) => {
        if (allParticipants.length > 0) {
          this.setState({
            error: '',
            validParticipantCount: allParticipants.length
          });
        } else {
          this.setState({
            error: '抽奖池为空！'
          });
        }
      })
      .catch(error => {
        this.setState({
          error: error.message
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
