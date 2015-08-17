import alt from '../alt';
import CommunityCardActions from '../actions/CommunityCardActions';
import HomeActions from '../actions/HomeActions';

class CommunityCardStore {
  constructor() {
    this.bindActions(CommunityCardActions);
    this.activeCommunityName = '';
    this.activeCommunityLinks = [];
  }

  onSetActiveCommunityName(communityName) {
    this.activeCommunityName = communityName;
    console.log(communityName);
  }

  onGetCommunityInfoSuccess(data) {
    this.activeCommunityLinks = data;
    console.log(this.activeCommunityLinks);
  }

  onGetCommunityInfoFail(errorMessage) {

  }

  onRemoveCommunitySuccess(data) {
    HomeActions.getCommunities();
  }

  onRemoveCommunityFail(errorMessage) {

  }
}

export default alt.createStore(CommunityCardStore);
