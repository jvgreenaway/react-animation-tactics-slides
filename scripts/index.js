var React = require('react/addons'),
    domready = require('domready');

var FadeInGroup = React.createFactory(require('./components/fade-css-group')),
    TranslateInGroup = React.createFactory(require('./components/translate-in-group')),
    ModalCSSGroup = React.createFactory(require('./components/modal-css-group'));
    NthChildDelayCSSGroup = React.createFactory(require('./components/nth-child-delay-css-group'));


domready(function() {

  React.render(
    FadeInGroup(), 
    document.getElementById('fade-css-group-demo')
  );  

  React.render(
    TranslateInGroup(), 
    document.getElementById('translate-in-group-demo')
  );  

  React.render(
    ModalCSSGroup(), 
    document.getElementById('modal-css-group-demo')
  );  

  React.render(
    NthChildDelayCSSGroup(), 
    document.getElementById('nth-child-delay-css-group-demo')
  );  

});
