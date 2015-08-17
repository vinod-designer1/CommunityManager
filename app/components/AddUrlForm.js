/**
 * @jsx React.DOM
 */

import React from 'react';
import {Link} from 'react-router';
import AddUrlFormActions from '../actions/AddUrlFormActions';
import AddUrlFormStore from '../stores/AddUrlFormStore';

class AddUrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddUrlFormStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AddUrlFormStore.listen(this._onChange);
    $('.modal-trigger').leanModal();
    //$('select').material_select();
  }

  componentWillUnMount() {
    AddUrlFormStore.unlisten(this._onChange);
  }

  _onChange(state) {
    this.setState(state);
  }

  _addNewUrl() {
    let newurl = this.state.newurl.trim();
    let communities = [this.state.selectedcommunityId];

    if (newurl) {
      let payload = {
        url:newurl,
        communities:communities
      };

      AddUrlFormActions.storeNewUrl(payload);
    }

    this._removeLeanOverlay();
  }

  _removeLeanOverlay() {
    $('.lean-overlay').remove();
  }

  render() {
    return (
      <div>
        <div className="container">
          <form className="row">
            <div className="input-field col s11">
              <input id="url" type="url" value={this.state.newurl} onChange={AddUrlFormActions.updateNewUrl} className="validate"/>
              <label for="url">Url</label>
            </div>
            <a
              data-target="addcommunitiesmodel"
              className="btn btn-large waves-effect col s1 waves-light tooltipped modal-trigger"
              data-position="bottom" data-delay="50" data-tooltip="Add Url"
            >
              <i className="material-icons">add</i>
            </a>
          </form>
        </div>

        <div id="addcommunitiesmodel" className="modal">
          <div className="modal-content">
            <h4>Add communities to add to</h4>
            <p>
              <div className="input-field">
                <select className="browser-default" onChange={AddUrlFormActions.updateCommunityId}>
                    <option value="" disabled selected>Choose your option</option>
                    {
                      this.props.communities.map((community)=> {
                        return (
                          <option value={community._id}>{community.name}</option>
                        );
                      })
                    }
                </select>
              </div>
            </p>
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this._addNewUrl.bind(this)} className="modal-action modal-close waves-effect waves-green btn-flat">
              Add New Url
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

AddUrlForm.propTypes = {
  communities: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default AddUrlForm;