var Backbone = require('backbone');

var Image = Backbone.Model.extend({

});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/imageblog'
});

module.exports = {
  Image: Image,
  ImageCollection: ImageCollection
};
