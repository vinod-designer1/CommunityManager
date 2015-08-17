import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.communities = [];
  }

  onGetCommunitiesSuccess(communities) {
    this.communities = communities;
  }

  onGetCommunitiesFail(errorMessage) {

  }
}

export default alt.createStore(HomeStore);

