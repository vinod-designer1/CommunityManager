import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getCommunitiesSuccess',
      'getCommunitiesFail'
    );
  }

  getCommunities() {
    $.ajax({ url: '/api/communities' })
      .done(data => {
        this.actions.getCommunitiesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getCommunitiesFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);