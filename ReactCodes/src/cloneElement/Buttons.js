import React from 'react';

export default class Buttons extends React.Component {

  constructor() {
    super();
    this.state = { selected: 'none' };
  }

  selectItem(selected) {
    this.setState({ selected });
  }

  render() {
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      });

    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <p>You have selected: {this.state.selected}</p>
        {items}
      </div>
    )
  }
}
