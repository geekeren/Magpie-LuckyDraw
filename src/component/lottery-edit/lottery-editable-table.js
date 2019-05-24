import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement, arrayMove, SortableHandle } from 'react-sortable-hoc';
import { setLottery } from '../../redux/actions/lotteryDrawing';
const uuidv4 = require('uuid/v4');

const DragHandle = SortableHandle(() => <FontAwesomeIcon icon={faBars} size={16} className={'drag-handle'}/>);
const SortableList = SortableContainer(({ items, onItemChange }) => {
  const SortableItem = SortableElement(({ value, sortIndex }) =>
    <div key={sortIndex} className="lottery-item">
      <DragHandle/>
      <div className="lottery-item-name">
        <input
          type={'text'}
          defaultValue={value.title}
          onBlur={e => {
            items.find(lottery => lottery.id === value.id).title = e.target.value
            onItemChange(items)
          }}
        /></div>
      <div className="lottery-item-count">
        <input
          type={'number'}
          defaultValue={value.totalCount}
          onBlur={e => {
            items.find(lottery => lottery.id === value.id).totalCount = parseInt(e.target.value)
            onItemChange(items)
          }}
        />
      </div>
      <div className="lottery-item-remove"
           onClick={() => {
             items = items.filter(lottery => lottery.id !== value.id)
             onItemChange(items)
           }}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}/>
      </div>
    </div>
  );
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          sortIndex={index}
        />
      ))}
    </div>
  );
});

class LotteryEditableItem extends React.Component {

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      if (this.lotteryItemBodyRef) {
        this.lotteryItemBodyRef.scrollTo(this.lotteryItemBodyRef.scrollHeight, this.lotteryItemBodyRef.scrollHeight);
      }
    }, 100)
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.setLottery(arrayMove(this.props.lotteries, oldIndex, newIndex));
  };

  render() {
    return (
      <div>
        <div className={"lottery-item-body"} ref={el => this.lotteryItemBodyRef = el}>
          <SortableList
            useDragHandle
            items={this.props.lotteries}
            onItemChange={items => this.props.setLottery(Object.assign([], items))}
            onSortEnd={this.onSortEnd.bind(this)}/>
        </div>
        <div className="lottery-item-add"
             onClick={() => {
               const items = this.props.lotteries;
               items.push({
                 id: uuidv4(),
                 title: '幸运奖',
                 totalCount: 3,
               })
               this.props.setLottery(Object.assign([], items))
             }}
        >
          <FontAwesomeIcon
            icon={faPlusCircle}/>
          添加奖项
        </div>
      </div>
    )
  }
}

LotteryEditableItem.propTypes = {
  lotteries: PropTypes.array,
  setLottery: PropTypes.func,
};
const mapStateToProps = state => ({
  lotteries: state.dataReducer.lotteryDrawing.setting
});

export default connect(mapStateToProps, { setLottery })(LotteryEditableItem);
