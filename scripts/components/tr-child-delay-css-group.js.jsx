var React = require('react/addons'),
    CSSTransitionGroup = React.addons.CSSTransitionGroup;


module.exports = React.createClass({  
  
  getDefaultProps: function() {
    var items = [];
    for (var i = 1; i <= 10; i++) {
      items.push({id: i});
    };
    return {
      items: items,
      itemsPerPage: 3
    };
  },

  getInitialState: function() {
    return {
      page: 1
    };
  },

  nextPage: function() {
    this.setState({page: this.state.page+1});
  },

  render: function () {    
    function renderItem(item, i) {
      var page = Math.floor(i/this.props.itemsPerPage),
          pageId = i % this.props.itemsPerPage;
      return (
        <div 
          key={item.id}
          className={'tr-delay-item tr-' + page + '-' + pageId}
        />
      );
    }

    var slice = Math.min(this.state.page * this.props.itemsPerPage, this.props.items.length),
        items = this.props.items.slice(0, slice);

    return (
      <div>
        <CSSTransitionGroup transitionName='tr' className='list'>
          { items.map(renderItem.bind(this)) }
        </CSSTransitionGroup>

        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
});
  
