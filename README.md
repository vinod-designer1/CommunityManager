============================  KNOWLEDGE BUILDER =========================
HOW TO RUN THE APP:

NPM INSTAL:  npm install

BOWER INSTALL:  bower install

START MONGODB: mongo --dbpath <dbpath>

START GULP: ./node_modules/.bin/gulp (building scripts)

START NODE: npm run watch

AIM OF THIS APP:
  The aim of this app is to build internal employee knowledge graph of the company.

Here is one usecase:
Say Sam is employee of baba jobs and he reads about new coding patterns and new libraries so he followes some links and read them. So here our app comes into play say if Sam shares the links in our app and into a community everyone following the community will get these links in their personal feed. So once Sam share some links his knowledge graph will update his knowledge with that skill in the links he read. So once we had resonable data we can suggest Sam with new opportunities for his interest inside company, and knowledge graph can build suggestions to find what Sam can help in for other employees.

So intial app is divided into these modules:

CommunityModule:
  Which helps to create, delete, update communities info
Link Publish Module:
  Helps to publish links to communities
Auth Module:
  Helps to authorize or create new users, company
User Feed Module:
  Helps to build feed for the user based on communities he follow and interest he specified.
Suggestion Module:
  Suggest this based on knowledge graph such as new opporutnites in company, help for problem etc..


How much is done:
  CommunityModule and Link Publish Module was made. But Right now as there is no user any one can create,delete any community  and anyone can publish to any community.

Technologies Used:
  Nodejs, Koa, react, html, materialcss, gulp, nodeman, monk, jquery, react-router, koa-router, swig.

What tech i learned:
  Nodejs, Koa, react, materialcss, gulp, nodeman, monk, swig, react-router, koa-router,.

What my suggestions from experience:
Koa needs more modules to build for complete production
React is really good for building views. FLux pattern is real good i liked it a lot. But still i found need for common or shared states.

