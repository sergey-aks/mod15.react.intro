const elem = React.createElement;

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = { clicked: false }
  }
  
  render(){
    if (this.state.clicked){
      return elem('button', {
      onClick: () => this.setState( {clicked: false} ) 
    }, 'You clicked!')
    }
    
    return elem('button', {
      onClick: () => this.setState( {clicked: true} ) 
    }, 'Click me!')
  }
}

const domContainer = document.querySelector('#app')

ReactDOM.render(elem(Button), domContainer)