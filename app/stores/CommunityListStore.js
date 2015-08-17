import alt from '../alt';
import CommunityListActions from '../actions/CommunityListActions';
import HomeActions from '../actions/HomeActions';

class CommunityListStore {
  constructor() {
    this.bindActions(CommunityListActions);
    this.newCommunityName = '';
    this.newCommunityDesc = '';
  }

  onUpdateNewCommunityName(event) {
    this.newCommunityName = event.target.value;
  }

  onUpdateNewCommunityDesc(event) {
    this.newCommunityDesc = event.target.value;
  }

  onSaveCommunitySuccess(data) {
    HomeActions.getCommunities();
  }

  onSaveCommunityFail(errorMessage) {
  }
}

export default alt.createStore(CommunityListStore);