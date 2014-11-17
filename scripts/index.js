var React = require('react/addons'),
    domready = require('domready');

var FadeInGroup = React.createFactory(require('./components/fade-in-group'));


domready(function() {

  React.render(
    FadeInGroup(), 
    document.getElementById('fade-in-group-demo')
  );  

});
