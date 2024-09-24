import React, { FormEvent } from 'react';
import './SearchBar.scss';

type MyState = {
  value: string
}


class SearchBar extends React.Component {

  state: MyState = {value: ''};

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget.elements;
    const currentSearchValue = form[0] as HTMLInputElement;
    this.setState({value: currentSearchValue.value});
  }

  render() {
    return (
      <div className='search-bar'>
        <form name='search-form' onSubmit={this.handleSubmit}>
          <input  className='search-input' placeholder='Search...' />
          <button className='search-button' type='submit'>Search</button>
        </form>
        <div>{this.state.value}</div>

      </div>
    )
  }
}

export default SearchBar;