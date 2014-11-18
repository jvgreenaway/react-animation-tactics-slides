var React = require('react/addons'),
    TransitionGroup = React.addons.TransitionGroup
    AnimateMixin = require('react-animate')
    fromCSS = require('react-css').fromCSS;

var from = fromCSS('{ transform: translate3d(0, 100%, 0); }'),
    to = fromCSS('{ transform: translate3d(0, 0%, 0); }');


var Modal = React.createClass({

  mixins: [AnimateMixin],

  getInitialState: function() {
    return {
      showPanel: false
    };
  },

  componentWillEnter: function (done) {
    this.animate('shade', 
      {opacity: 0.01}, {opacity: 1}, 
      'in-out', 500, next.bind(this)
    );
    function next() {
      this.setState({showPanel: true});
      this.animate('panel', 
        from, to,
        'in-out', 500, done
      );
    }    
  },

  componentWillLeave: function (done) {
    done();
  },

  render: function() {
    return (
      <div>
        {this.state.showPanel? 
          <div style={this.getAnimatedStyle('panel')} className='modal-group__panel'>
            <div className='modal-group__panel__inner'>
              <button onClick={this.props.onClose}>Close</button>
            </div>
          </div>
          : null
        }
        <div style={this.getAnimatedStyle('shade')} className='modal-group__shade' />
      </div>
    );
  }

});


module.exports = React.createClass({  
  
  getInitialState: function() {
    return {
      visible: false
    };
  },

  show: function() {
    this.setState({visible: true});
  },
  hide: function() {
    this.setState({visible: false});
  },

  render: function() {    
    var modal = [];  
    if (this.state.visible) {
      modal = <Modal key='modal' onClose={this.hide} />;
    } 

    return (
      <div>
        <TransitionGroup className='modal-group'>
          { modal }
        </TransitionGroup>

        <button onClick={this.show}>Show</button>
      </div>
    );
  }
});
  
