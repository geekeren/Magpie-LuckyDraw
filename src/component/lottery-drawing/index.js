import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DrawService from "../../service/DrawService";
import { addWinner } from '../../redux/actions/lotteryPool'
import { connect } from 'react-redux';

class LotteryDrawing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
      button: 'start',
    };
  }

  render() {
    return (
      <div className="lottery-drawing">
        {this.state.display}
        <button onClick={this.onClick.bind(this)}>{this.state.button}</button>
      </div>
    );
  }

  onClick = () => {
    this.setState({
      button: !this.drawService.isRolling ? "stop" : "start"
    });
    try{
      if (this.drawService.isRolling) {
        this.drawService.pickOneThenDo((selected) => {
          this.props.addWinner(selected);
        })
      } else {
        this.drawService.rollUp();
      }
    } catch (err){
      console.error(err.message)
    }


  };

  componentDidMount() {
    this.drawService = DrawService.from(this.props.allParticipants)
      .setOnSelectedChangedCallback((selectedItem) => {
        this.setState({
          display: selectedItem.name,
        });
      })
      .setNoDuplicate(true)
      .setOnPickBlockedChangedCallback((blocked) => {
        this.setState({
          button: blocked ? '...' : "start"
        });
      });
  }
}
LotteryDrawing.propTypes = {
  addWinner: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  allParticipants: state.dataReducer.lotteryPool.allParticipants,
});
export default connect(mapStateToProps, {addWinner})(LotteryDrawing);
