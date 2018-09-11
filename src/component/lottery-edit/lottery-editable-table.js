import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement, arrayMove, SortableHandle } from 'react-sortable-hoc';
import { setLottery } from '../../redux/actions/lotteryDrawing';

const DragHandle = SortableHandle(() => <span>≡</span>); // This can be any component you want
const SortableItem = SortableElement(({ value, sortIndex }) =>
  <div key={sortIndex} className="lottery-item">
    <DragHandle/>
    <div className="lottery-item-name">
      <input type={'text'} value={value.title}/></div>
    <div className="lottery-item-count"><input type={'number'} value={value.totalCount}/></div>
  </div>
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className={"lottery-item-body"}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} sortIndex={index}/>
      ))}
    </div>
  );
});

class LotteryEditableItem extends React.Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.setLottery(arrayMove(this.props.lotteries, oldIndex, newIndex));
  };

  render() {
    return <SortableList useDragHandle items={this.props.lotteries} onSortEnd={this.onSortEnd.bind(this)}/>;
  }
}

LotteryEditableItem.PropTypes = {
  lotteries: PropTypes.array,
  setLottery: PropTypes.func,
};
const mapStateToProps = state => ({
  lotteries: state.dataReducer.lotteryDrawing.setting
});

export default connect(mapStateToProps, { setLottery })(LotteryEditableItem);