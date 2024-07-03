import React, { FormEvent } from 'react';
import './SearchBar.scss';

type MyState = {
  value: string
}

class SearchBar extends React.Component {
  state: MyState;
  constructor(props : {}) {
    super(props);

    this.state = {value: ''};
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target && this.setState({value: event.target.value});
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Value ' + this.state.value);
  }

  render() {
    return (
      <div className='search-bar'>
        <form name='search-form' onSubmit={this.handleSubmit}>
          <input className='search-input' placeholder='Search...' value={this.state.value} onChange={this.handleChange}/>
          <button className='search-button' type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;