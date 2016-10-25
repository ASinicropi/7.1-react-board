var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/image');
var form = require('./components/form.jsx').ImageForm;
var listing = require('./components/listing.jsx').BlogListing;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    var blogs = this.blogs = new models.ImageCollection();
  },
  index: function(){

    ReactDOM.render(
      React.createElement(form, {collection: this.blogs}),
      document.getElementById('app')
    );

    ReactDOM.render(
      React.createElement(listing {collection: this.blogs}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
