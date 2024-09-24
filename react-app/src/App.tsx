import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {IPeople} from 'swapi-ts/src/SWApi';
import './App.css';

 export type State = {
  count: number;
  next: string;
  previous: null;
  results: IPeople[]
}

class App extends React.Component {

  state: {data: null | State}

  constructor(props: {}) {
    super(props)

    this.state = {
      data: null
    }
  }

  async getData() {
    const baseLink = 'https://swapi.dev/api/people/'
    try {
      const response = await fetch(baseLink, {method: 'GET'})
      this.setState({data: await response.json()})
    } catch(e) {
      console.warn(e)
    }
  }

  componentDidMount(): void {
    this.getData()
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Main currentData = {this.state.data}/>
      </div>
    )
  }
}

export default App;
