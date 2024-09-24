import React from 'react';
import { State } from '../../App';
import './Main.scss';

type MyProps = {
  currentData: State | null
}


class Main extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
  
      this.props.currentData ? 
      this.props.currentData.results.map(item => <p>{item.name}</p>)
      : 'Main'
    )
  }
}

export default Main;