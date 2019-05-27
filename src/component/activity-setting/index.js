import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setActivityName } from '../../redux/actions/activitySetting'
import './activity-setting.css'

class ActivitySetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityName: props.activityName
    }
  }

  render() {
    return (
      <div className="activity-setting">
        <div>
          <header>活动名称</header>
          <section>
            <input defaultValue={this.props.activityName} onChange={this.onNameChange.bind(this)}/>
          </section>
          <section className={'next-btn'}>
            <button disabled={!this.state.activityName} className={!this.state.activityName ? "disable" : ''} onClick={this.next.bind(this)}>NEXT</button>
          </section>
        </div>
      </div>
    );
  }
  onNameChange = (element) => {
    this.setState({
      activityName: element.target.value
    })
  };
  next = () => {
    this.props.setActivityName(this.state.activityName);
    this.props.history.push("/lottery-pool")
  }

}

ActivitySetting.propTypes = {
  setActivityName: PropTypes.func.isRequired,
  activityName: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  activityName: state.dataReducer.activitySetting.name,
});

export default connect(mapStateToProps, { setActivityName })(ActivitySetting);
