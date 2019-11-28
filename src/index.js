import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SerchComponent/search";
import ContactList from "./components/ContactList/contactlist";

//const App = () =>{
class App extends Component{//or React.Component i ne pidklyuchaty
    //creating array of objects
   
    List = [
        {
        name: "Jack Sparrow",
        description: "Captain",
        avatar: 20,
        gender:"men",
        },
        {
        name: "Cris Nollan",
        description: "Producer",
        avatar: 30,
        gender:"men"
        },
        {
        name: "Arnold Swarzeneger",
        description: "Terminator",
        avatar: 3,
        gender:"men"
        },
        {
        name: "Alfred Hitchcok",
        description: "Producer",
        avatar: 8,
        gender:"men"
        },
        {
        name: "Silvestr Stalone",
        description: "Rembo",
        avatar: 33,
        gender:"men"
        }
        ];
    render(){
    
    return(
        <div className="container bootstrap snippet">
            <h1 className="col-6 offset-3 d-flex justify-content-center">Contact List</h1>
            <Search></Search>
            <ContactList ContactList={this.List}></ContactList>
        </div>
    );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


