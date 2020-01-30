import React from 'react';
//we need to import these two classes so we can access their
//components and other data
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import './App.css';

//if you refer to the picture that shows the downard flow of data within react you 
//may notice that neighbour or child data cannot comunicate with each other directly
//that is why you need a state (description of your app i.e. object)
//the state in our case is the robot and what is entered in the search box
//your state would change based on what is typed in search bar

//props are things that come out of state
//a parent feeds state into child component and as soon as child receives
//the state a child cannot change the state


class App extends React.Component {
    constructor() {
        super()
        //state describes our app and lives in parent component
        //we have two states
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    //updates the state of robot
    componentDidMount() {
        //going to fetch the users from a website that has json text
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //we need to convert the response from the users in the website into json objec
        .then(users => this.setState({robots: users})); //we are retrieving the users from the json and 
                                                        //updating the state of robots with setState
                                                        //without this you wont recieve robots
    }
    //a function that checks for changes in search value 
    //also onSearchChange is a prop passed down to searchbox
    onSearchChange = (event) => {
        
        //any time you want to change the state always run this
        //very important rule of React
        this.setState({searchField: event.target.value})  //the value of event
        
      
    }

    render() {
        //putting this here to have filteredRobots accessible
        const filteredRobots = this.state.robots.filter(robot => {
            //filters the robots state to only have what includes in 
            //the search field 
            //tolowercase is used to ensure values typed in search field are 
            //are converted to lowercase to make it easy upper/lower case conversion
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        
        //if we had too mny users and page took to ong
        if (this.state.robots.length ===0) {
            return <h1>Loading</h1>
        }
        return(
            //we created a component within the App component
            //were the CardList stores the card component and
            //robots holds the array of values and we are able to access
            //the values in the array because we are destructuring with {}
           <div className="tc">
                <h1 className= 'f1 tc grow '>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                {/* we are passing the filtered robots in the card list */}
                <CardList robots={filteredRobots} />
                </Scroll>
           </div>
        )
    }
    
}

export default App;