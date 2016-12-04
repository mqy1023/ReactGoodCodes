import React from 'react';
import JSON_DATA from './data.json'

class FilterApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    // fetch('https://swapi.co/people/?format=json')
    //   .then(response => response.json())
    //   .then(({ results: items }) => this.setState({ items }))
    this.setState({ items: JSON_DATA.results });
  }
  filterFunc(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    let { items } = this.state;
    if (this.state.filter) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
        <input type="text" onChange={this.filterFunc.bind(this)} />
        {
          items.map(item =>
            <Person key={item.name} person={item} />
          )
        }
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default FilterApp;
