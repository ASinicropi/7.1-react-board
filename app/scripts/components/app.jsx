var React = require('react');

var ImageCollection = require('../models/images/images.js').ImageCollection;
var Image = require('../models/images.js').Image;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });
    return{
      imageToEdit: imageModel,
      collection: imageBoard,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  editImage: function(image){
    this.setState({imageToEdit: image});
  },
  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){
      return(
        <ListingComponent
          key={image.get("_id")}
          model = {image}
          editImage={self.editImage}
        />
      );
    });

    return(
      <div>
        <header>
          <a className="add-image" href="#" onClick={this.handleToggleForm}><i className="glyphicon glyphicon-plus"></i></a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.showForm} ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage}/> : null}
            </div>
          </div>

          <div className="row">
            {imageList}
          </div>

        </div>
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
