import alt from '../alt';

class CommunityListActions {
  constructor() {
    this.generateActions(
      'saveCommunitySuccess',
      'saveCommunityFail',
      'updateNewCommunityName',
      'updateNewCommunityDesc'
    );
  }

  saveCommunity(payload) {
    $.post('/api/community/add', payload, function(){

    })
      .done(data => {
        this.actions.saveCommunitySuccess(data);
      })
      .fail(jqXhr => {
        this.actions.saveCommunityFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(CommunityListActions);