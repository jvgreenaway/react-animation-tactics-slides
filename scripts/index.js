var React = require('react/addons'),
    domready = require('domready'),
    $ = require('jquery');

var FadeInGroup = React.createFactory(require('./components/fade-css-group')),
    TranslateInGroup = React.createFactory(require('./components/translate-in-group')),
    ModalCSSGroup = React.createFactory(require('./components/modal-css-group'));
    NthChildDelayCSSGroup = React.createFactory(require('./components/nth-child-delay-css-group')),
    TrChildDelayCSSGroup = React.createFactory(require('./components/tr-child-delay-css-group')),
    ModalAnimate = React.createFactory(require('./components/modal-animate')),
    ModalAnimatePrefixedFromCSS = React.createFactory(require('./components/modal-animate-prefixed-from-css'));


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

  React.render(
    TrChildDelayCSSGroup(), 
    document.getElementById('tr-child-delay-css-group-demo')
  );  

  React.render(
    ModalAnimate(), 
    document.getElementById('modal-animate-demo')
  );  

  React.render(
    ModalAnimatePrefixedFromCSS(), 
    document.getElementById('modal-animate-prefixed-from-css-demo')
  );  

  
  var $demoBlocks = $('.demo__code__col');

  $demoBlocks.on('mouseenter', function (e) {
    var $this = $(this);
    $this.addClass('is-big');
    $this.siblings().addClass('is-small');
  });

  $demoBlocks.on('mouseleave', function (e) {
    var $this = $(this);
    $this.removeClass('is-big');
    $this.siblings().removeClass('is-small');
  });


});
