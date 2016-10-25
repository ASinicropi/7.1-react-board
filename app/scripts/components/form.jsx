var _ = require('underscore');
var React = require('react');
var Backbone = require('backbone');

var ImageForm = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  handleClick: function(e){
  e.preventDefault();

  this.showForm = !this.showForm;
  this.forceUpdate();
  },
  render: function(){
    var display:
    if(this.showForm){
      display = (
      <form>
        <div class="form-group row">
          <div class="col-xs-8">
            <label htmlFor="imageURL">Image URL</label>
            <input class="form-control" type="url" id="imageURL" placeholder="Image URL"/>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-xs-8">
            <label htmlFor="caption">Caption</label>
            <input class="form-control" type="text" id="caption" placeholder="Image Caption"/>
          </div>
        </div>
        <button className="btn btn-warning">Cancel</button>
        <button className="btn btn-success">Add Image</button>
      </form>
      );
    }
    return (
    <div className= "well">
      <button className="added-form" onClick={this.handleClick}>+</button>
      {display}
    </div>
    );
  }
});

module.exports = {
  ImageForm: ImageForm
}
