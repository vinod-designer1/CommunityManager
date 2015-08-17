/**
 * @jsx React.DOM
 */

import React from 'react';
import CommunityCard from './CommunityCard';
import CommunityListActions from '../actions/CommunityListActions';
import CommunityListStore from '../stores/CommunityListStore';

class CommunityList extends React.Component {

  constructor(props) {
    super(props);
    this.state = CommunityListStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CommunityListStore.listen(this._onChange);
    $('.modal-trigger').leanModal();
  }

  componentWillUnMount() {
    CommunityListStore.unlisten(this._onChange);
  }

  _onChange(state) {
    this.setState(state);
  }

  _addNewCommunity() {
    var name = this.state.newCommunityName,
        desc = this.state.newCommunityDesc;

    var payload = {
      name:name,
      desc:desc
    };

    CommunityListActions.saveCommunity(payload);

    this._removeLeanOverlay();
  }

  _removeLeanOverlay() {
    $('.lean-overlay').remove();
  }

  render() {
    var communities = this.props.communities;
    return (
      <div className="community-container container">

        <div className="col s12 m4 l4">
          <div className="card blue-grey darken-1 modal-trigger" data-target="addcommunitymodel">
            <div className="card-content white-text">
                <i className="material-icons">add</i>
                <span className="card-title">Add Community </span>
            </div>
          </div>
        </div>

        {communities.map((community)=> {
          return (
            <CommunityCard key={community.id} community={community} />
          );
        }) }

        <div id="addcommunitymodel" className="modal">
          <div className="modal-content">
            <h4>Add Community</h4>
            <p>
              <form className="col s12">

                <div className="row">
                  <div className="input-field col s12">
                    <input placeholder="Community Name" value={this.state.newCommunityName} onChange={CommunityListActions.updateNewCommunityName} id="community_name" type="text" className="validate" />
                    <label for="community_name">Community Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="desc" onChange={CommunityListActions.updateNewCommunityDesc} value={this.state.newCommunityDesc} className="materialize-textarea"></textarea>
                    <label for="desc">Description</label>
                  </div>
                </div>

              </form>
            </p>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this._addNewCommunity.bind(this)} className="modal-action modal-close waves-effect waves-green btn-flat">
              Create New Community
            </a>
            <a href="#!" onClick={this._removeLeanOverlay} className="modal-action modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>

      </div>
    );
  }
}

CommunityList.propTypes = {
  communities: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default CommunityList;