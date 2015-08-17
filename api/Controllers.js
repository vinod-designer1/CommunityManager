var parse = require('co-body'),
    Config = require('../config'),
    monk = require('monk');

var db = monk(Config.db);

// models
var communities = db.get('communities'),
    posts = db.get('posts'),
    communityposts = db.get('communityposts');

/**
 * GET /api/communites
 * List of All Communities.
 */
exports.getcommunities = function *() {
  this.type = 'application/json';

  try {
    this.status = 200;
    this.body = yield communities.find({}, {sort: {modified: 1}});
  } catch (err) {
    this.status = err.status || 500;
    this.body = {'status':'error' , 'msg':err.message};
  }
};

/**
 * POST /api/communites
 * Add a Community.
 */
exports.addcommunity = function *() {
  try {
    var data = yield parse(this);

    var name = data.name,
        desc = data.desc;

    yield communities.insert({
      name:name, desc:desc,
      created: Date.now(),
      modified: Date.now()
    });

    this.status = 200;
    this.type = 'application/json';
    this.body = {'status':'success'};
  } catch (err) {
    this.status = err.status || 500;
    this.body = {'status':'error' , 'msg':err.message};
  }
  
};

/**
 * GET /api/community/:communityid'
 * Get communityinfo.
 */
exports.getcommunityinfo = function *() {

  var communityid = this.params.communityid;

  var community_posts = [];

  try {
    community_posts = yield communityposts.find({community: communityid});
    var community_posts_data = [];

    for (var i = 0; i < community_posts.length; ++i) {
      var post = community_posts[i];
      if (post !== null) {
        var post_data = yield posts.findById(post['post']);
        if (post_data !== null)
          community_posts_data.push(post_data);
      }
    }

    this.status = 200;
    this.type = 'application/json';
    this.body = community_posts_data;
  } catch (err) {
    this.status = err.status || 500;
    this.body = {'status':'error' , 'msg':err.message};
  }
};

/**
 * DELETE /api/community/:communityid'
 * Get communityinfo.
 */
exports.removecommunity = function *() {
  try {
    var communityid = this.params.communityid;

    yield communityposts.remove({community: communityid});
    yield communities.removeById(communityid);

    this.status = 200;
    this.type = 'application/json';
    this.body = {'status':'success'};
  } catch (err) {
    this.status = err.status || 500;
    this.body = {'status':'error' , 'msg':err.message};
  }
};


/**
 * POST /api/url
 * Add new url.
 */
exports.addurl = function *() {
  try {
    var data = yield parse(this);

    var url = data.url;
    var communities = data.communities;

    var post = yield posts.insert({
      url: url,
      created: Date.now(),
      modified: Date.now()
    });

    for (var i=0; i < communities.length; ++i) {
      yield communityposts.insert({
        community: communities[i],
        post: post._id,
        created: Date.now(),
        modified: Date.now()
      });
    }

    this.status = 200;
    this.type = 'application/json';
    this.body = {'status':'success'};
  } catch (err) {
    this.status = err.status || 500;
    this.body = {'status':'error' , 'msg':err.message};
  }
};