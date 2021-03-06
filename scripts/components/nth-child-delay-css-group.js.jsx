var React = require('react/addons'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;


module.exports = React.createClass({  
  
  getDefaultProps: function() {
    var items = [];
    for (var i = 1; i <= 10; i++) {
      items.push({id: i});
    };
    return {
      items: items
    };
  },

  getInitialState: function() {
    return {
      show: false
    };
  },

  show: function() {
    this.setState({show: true});
  },

  hide: function() {
    this.setState({show: false});
  },

  _renderItem: function(item, i) {
    return (
      <div 
        key={item.id}
        className='delay-item'
      />
    );
  },

  render: function () {        
    return (
      <div>
        <CSSTransitionGroup transitionName='tr' className='list'>
          { this.state.show? this.props.items.map(this._renderItem):[] }
        </CSSTransitionGroup>

        <div className='controls'>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
        </div>
      </div>
    );
  }
});
  
