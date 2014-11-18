var React = require('react/addons'),
    domready = require('domready');

var FadeInGroup = React.createFactory(require('./components/fade-in-group')),
    TranslateInGroup = React.createFactory(require('./components/translate-in-group'));


domready(function() {

  React.render(
    FadeInGroup(), 
    document.getElementById('fade-in-group-demo')
  );  

  React.render(
    TranslateInGroup(), 
    document.getElementById('translate-in-group-demo')
  );  

});
