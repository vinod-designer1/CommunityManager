import alt from '../alt';
import AddUrlFormActions from '../actions/AddUrlFormActions';

class AddUrlFormStore {
  constructor() {
    this.bindActions(AddUrlFormActions);
    this.newurl = '';
    this.selectedcommunityId = '';
  }

  onUpdateNewUrl(event) {
    this.newurl = event.target.value;
  }

  onStoreNewUrlSuccess(data) {
    this.newurl = '';
    this.selectedcommunityId = '';
  }

  onUpdateCommunityId(event) {
    this.selectedcommunityId = event.target.value;
  }

  onStoreNewUrlFail(jqXhr) {
    console.log(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(AddUrlFormStore);