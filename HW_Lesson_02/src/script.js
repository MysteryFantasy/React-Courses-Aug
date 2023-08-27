const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
  {type: `turtle`, icon: `🐢`},
  {type: `octopus`, icon: `🐙`},
  {type: `fish`, icon: `🐠`},
  {type: `flamingo`, icon: `🦩`},
  {type: `penguin`, icon: `🐧`}
];

const indexesList = animals.map((item, index) => index);

class AnimalsList extends React.Component{

  state = Object.assign({
    borderWidth: 0,
  }, this.props);

  componentDidMount(){
  
    const addActiveClass = setInterval(() => {
    
    let randomIndex = Math.floor(Math.random() * indexesList.length);
    let randomIndexValue = indexesList[randomIndex];

    indexesList.splice(randomIndex, 1);

    this.setState({
      list: this.state.list.map((item, index) =>{
        if(index === randomIndexValue) item.active = true;
        return item;
        })
      }, () => {
        if(!indexesList.length){
          clearInterval(addActiveClass);
          this.setState({
            borderWidth: 20
          })
        }
        if(indexesList.length === Math.floor(this.state.list.length/2)){
          this.setState({
            borderWidth: 10
          })
        }
      })
    }, 2000);
  }

  render(){
    let {list=[], borderWidth} = this.state;
    return list.length
    ?<table style={{borderWidth}}>
      <tbody>
        {list.map((item, index) => <tr key={index} className={item.active && `item--active`}>
        {Object
          .keys(item)
          .filter(value => value !== `active`)
          .map((value, ind) => <td key={ind}>{item[value]}</td>)}
        </tr>)}
      </tbody>
    </table>
    :null;
  }
}

const App = <React.Fragment>

  <AnimalsList list={animals} />

</React.Fragment>

root.render(App);