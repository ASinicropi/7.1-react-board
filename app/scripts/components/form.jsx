var React = require('react');

var FormComponent = React.createClass({
  getInitialState: function(){
    return{
      url: this.props.model.get('url');
      caption: this.props.model.get('caption')
    };
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue})
  },
  handleSubmit: function(e){
    e.preventDefault();
    var newImage = {url: this.state.url, caption: this.state.caption};

    this.props.addImage(newImage);

    this.setState({url: '', caption: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="well" action="index.html" method="post">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this.handleUrlChange} className="form-control" type="text" id="url" value={this.state.url} placeholder="Image URL"/>
        </div>
        <div className="form-group">
          <label htmlFor="caption">Image Caption</label>
          <textarea onChange={this.handleUrlChange} className="form-control" type="text" id="caption" value={this.state.caption} placeholder="Image Caption" row="3"/>
        </div>
        <button type="submit" className="btn btn-success">Add Image</button>
      </form>
      );
    }
});

module.exports = {
  FormComponent: FormComponent
}
