import React, { Component } from 'react';
import { connect } from 'react-redux';
import './result.css';

class Result extends Component {
  render() {
    return (
      <div>
        <div>{this.winnerList()}</div>
      </div>
    );
  }

  winnerList() {
    return (<div className="result_part">
      {
        this.props.winnerGroups.reverse().map(winnerGroup => (<div>
          <header className="special_prize_result_header">{winnerGroup.prizeName}</header>
          {winnerGroup.winner.map(winner =>
            (<div className="result_item">
              <div className="result_name">{winner.name}</div>
              <div className="result_phone">{winner.phone}</div>
            </div>)
          )}

        </div>))
      }
    </div>)
  }
}

const mapStateToProps = state => {
  const winners = state.dataReducer.lotteryPool.winners;
  const winnerGroups = [];
  winners.forEach(winner => {
    const index = winnerGroups.findIndex((winnerGroup) => winnerGroup.prizeName === winner.prize.title);
    if (index < 0) {
      winnerGroups.push({
        prizeName: winner.prize.title,
        totalCount: winner.prize.totalCount,
        winner: [winner]
      })
    } else {
      winnerGroups[index].winner.push(winner);
    }

  });
  return {
    winnerGroups,
  }
};
export default connect(mapStateToProps)(Result);
