/**
 * @jsx React.DOM
 */

import React from 'react';
import CommunityList from './CommunityList';
import AddUrlForm from './AddUrlForm';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this._onChange);
    HomeActions.getCommunities();
  }

  componentWillUnMount() {
    HomeStore.unlisten(this._onChange);
  }

  _onChange(state) {
    this.setState(state);
  }

  render() {
    var communities = this.state.communities;
    console.log(communities);

    return (
      <div>
        <div className="row">
          <div id="communities" className="col s12">
             <CommunityList communities={communities} />
          </div>
        </div>
        
        <AddUrlForm communities={communities} />
      </div>
    );

  }
}

export default Home;