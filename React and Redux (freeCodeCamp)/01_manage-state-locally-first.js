class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
      </div>
    );
  }
};