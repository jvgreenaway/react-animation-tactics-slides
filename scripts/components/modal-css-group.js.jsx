var React = require('react/addons'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;


module.exports = React.createClass({  
  displayName: 'ModalCSSGroup',

  getInitialState: function() {
    return {
      visible: false
    };
  },

  show: function () {
    this.setState({visible: true});
  },
  hide: function () {
    this.setState({visible: false});
  },


  render: function () {    
    var modalElements = [];
    if (this.state.visible) {
      modalElements = [
        <div key='modal' className='modal'>
          <button className='modal__btn' onClick={this.hide}>Close</button>
        </div>,
        <div key='shade' className='shade' />
      ];
    }

    return (
      <div>
        <CSSTransitionGroup transitionName='tr' className='list'>
          { modalElements }
        </CSSTransitionGroup>

        <div className='controls'>
          <button onClick={this.show}>Show</button>
        </div>
      </div>
    );
  }
});
  
