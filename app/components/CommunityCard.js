/**
 * @jsx React.DOM
 */

import React from 'react';
import CommunityCardActions from '../actions/CommunityCardActions';
import CommunityCardStore from '../stores/CommunityCardStore';


class CommunityCard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = CommunityCardStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CommunityCardStore.listen(this._onChange);
    $('.modal-trigger').leanModal();
  }

  componentWillUnMount() {
    CommunityCardStore.unlisten(this._onChange);
  }

  _onChange(state) {
    this.setState(state);
  }

  _populateCurrentCommunity(id) {
    CommunityCardActions.getCommunityInfo(this.props.community._id, this.props.community.name);
  }

  _removeLeanOverlay() {
    $('.lean-overlay').remove();
  }

  _deleteCommunity() {
    CommunityCardActions.removeCommunity(this.props.community._id);
  }

  render() {
    var community = this.props.community;
    var modelid = "showCommunityLinks" + community._id;
    return (
      <div>
        <div className="col s12 m4 l4" >
          <div className="card blue-grey darken-1">
            <div className="card-content white-text modal-trigger" data-target={modelid} onClick={this._populateCurrentCommunity.bind(this)}>
              <span className="card-title">{community.name}</span>
              <p>{community.desc}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light" onClick={this._deleteCommunity.bind(this)} href="#">Remove</a>
            </div>
          </div>
        </div>

        <div id={modelid} className="modal">
          <div className="modal-content">
            <h4>{this.state.activeCommunityName}</h4>
            <p>
              {this.state.activeCommunityLinks.map((link)=> {
                return (
                  <div className="row">
                    <div className="col s12 m12">
                      <div className="card grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">
                            <a href={link.url} style={{color:'#fff'}} target="_blank">{link.url}</a>
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) }
            </p>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this._removeLeanOverlay} className="modal-action modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CommunityCard.propTypes = {
  community: React.PropTypes.object.isRequired
};

export default CommunityCard;