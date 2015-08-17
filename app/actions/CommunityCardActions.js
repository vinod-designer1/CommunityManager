import alt from '../alt';

class CommunityCardActions {
  constructor() {
    this.generateActions(
      'getCommunityInfoSuccess',
      'getCommunityInfoFail',
      'setActiveCommunityName',
      'removeCommunitySuccess',
      'removeCommunityFail'
    );
  }

  removeCommunity(communityid) {
    $.ajax({
      url: '/api/community/'+communityid,
      type: 'DELETE'
    })
    .done(data => {
        this.actions.removeCommunitySuccess(data);
      })
      .fail(jqXhr => {
        this.actions.removeCommunityFail(jqXhr.responseJSON.message);
      });
  }

  getCommunityInfo(communityid, communityName) {
    this.actions.setActiveCommunityName(communityName);
    
    $.ajax({ url: '/api/community/'+communityid })
      .done(data => {
        this.actions.getCommunityInfoSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getCommunityInfoFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(CommunityCardActions);