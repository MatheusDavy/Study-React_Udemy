import { Component } from 'react'


//Components de classe
export default class App extends Component {
  //Criando state dentro de um component com classe
  constructor(props) {
    super(props);
    this.handleExibe = this.handleExibe.bind(this)

    this.state = {
      name: 'Matheus Davys',
      counter: 0,

    };
  }

  //Podemos simplificar ('Linha 8 até 17')
  /*
    state = {
      name: 'Matheus Davys',
      counter: 0,
    };
  */  

  handleExibe() {
    //Para podermos acessar o 'this' dentro de uma função precisamos usar o método bind ('linha 10')
    const { name } = this.state;
    console.log("Clicado")

    //Para mudarmos algum parâmetro dentro de um estado, precisamos fazer isso ('linha 32')
    this.setState({ name: 'Josias'})
  }







  //Se usarmos uma arrow function, nós NÃO precisamos fazer o método bind ('linha 10')
  handleRemoveEvent = (e)=>{
    //Remover o evento de um link
    e.preventDefault()

    //Para mudarmos algum parâmetro dentro de um estado, precisamos fazer isso ('linha 48')
    const {counter} = this.state
    this.setState({counter: counter + 1})
  }

  //Sempre que um estado mudar no react, a função render será chamada novamente
  render() {
    //Pegando parâmetros dentro de um state
    return (
      <>
        <div onClick={this.handleExibe}>Name = {this.state.name}</div>
        <div>Contador = {this.state.counter}</div>
        <br/>
        <br/>
        <br/>
        <a href='www.google.com.br' onClick={this.handleRemoveEvent}>Clique aqui</a>
      </>
    );
  }
}