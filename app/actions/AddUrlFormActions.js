import alt from '../alt';

class AddUrlFormActions {
  constructor() {
    this.generateActions(
      'updateNewUrl',
      'storeNewUrlSuccess',
      'storeNewUrlFail',
      'updateCommunityId'
    );
  }

  storeNewUrl(payload) {
    var url = payload.url,
        communities = payload.communities;
    
    $.post( '/api/url/add', { url: url, communities: communities }, function() {
    })
    .done(data => {
      this.actions.storeNewUrlSuccess(data);
    })
    .fail(jqXhr => {
      this.actions.storeNewUrlFail(jqXhr.responseJSON.message);
    });
  }
}

export default alt.createActions(AddUrlFormActions);