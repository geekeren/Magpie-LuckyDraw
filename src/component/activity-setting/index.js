import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setActivityName } from '../../redux/actions/activitySetting'
import './activity-setting.css'

class ActivitySetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityName: ''
    }
  }

  render() {
    return (
      <div className="activity-setting">
        <div>
          <header>活动名称</header>
          <section>
            <input defaultValue={''} onChange={this.onNameChange.bind(this)}/>
          </section>
          <section className={'next-btn'}>
            <button onClick={this.next.bind(this)}>NEXT</button>
          </section>
        </div>
      </div>
    );
  }
  onNameChange = (element) => {
    this.setState({
      activityName: element.target.value
    })
  }
  next = () => {
    this.props.setActivityName(this.state.activityName)
    this.props.history.push("/lottery-setting")
  }

}

ActivitySetting.propTypes = {
  setActivityName: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  activityName: state.dataReducer.activitySetting.name,
});

export default connect(mapStateToProps, { setActivityName })(ActivitySetting);