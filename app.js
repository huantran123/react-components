class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  onGroceryItemMouseOver() {
    this.setState({
      hovered: true
    })
  }

  onGroceryItemMouseOut() {
    this.setState({
      hovered: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onGroceryItemMouseOver.bind(this)} onMouseOut={this.onGroceryItemMouseOut.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));