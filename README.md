# CloneHackerNews

This is a clone of [Hacker news](https://news.ycombinator.com/) with some additional functionality such as filtering by date / popularity and so on. The webbapp is made using react and [HN Search API](https://hn.algolia.com/api).

### Core libraries

* React
* Redux
* React-redux
* Redux-Saga
* Reactstrap
* React-router-dom


### Preview

<img src="https://media.giphy.com/media/l4EpidT0IoRRtl58Q/giphy.gif">


# notes for my self (and others?)

## Redux

Redux is a great way to store your entire application state in one place (the redux store). What exactly is the application state? I had some trouble understanding this in the start, so let me start with an example. When a user enters your webb application they are greeted by for example a list of users. Then that userlist is the current application state, when clicking a user your application changes state and only display the clicked user, i.e the application changes its current state.

Consist mainly of three parts:

* Actions
* Reducers
* Store

#### Actions

Actions describe some event that has happend, for example a user clicks a button. Then we dispatch an action. The actions are dispatched using store.dispatch(), and can contain some form of payload. Actions are plain javascript objects and must have a type property that indicates the type of actions performed (e.g ADD_USER, REMOVE_USER and so on). 

### Reducers

Actions describe something that has happend, button clicked, add new user and so on, but it doesn't specifiy how the application state change in respone to an event. In the redux example, when click a single user in the list of users the application state needs to change, and reducers provide this functionality. To change the application state. Example of a reducer below

```{javascript}

const userReducer = (state = [], action) => {

    switch(action.type){
        case 'ADD_USER':
            return { ...state, action.user } // Add user to state
        case 'REMOVE_USER':
            return state.filter((user) => user.id != action.id)
            //Return all users except the one to be deleted
        case 'UPDATE_USER'
            return state.map((user) => {

                if(user.id === action.user.id){ // Find user, apply new details
                    return{
                        ...user,
                        action.user
                    }
                }
                return user // If not matching id, just return the user
            });
    }

}

```

***Note***: These are the same constants used in actions, when an action is dispatch the action with its type and payload will be passed to the reducer. For good pratice and less errors, create a separate file for the constants such as 'ADD_USER', 'REMOVE_USER' and so on and export.

***Important***: Reducers needs to be pure functions, i.e given the same arguments it should always return the same result. No API calls, no mutations.


### Store

Store is the object that brings actions and reducers together.
Properties of the store object

* Holds the application state
* Allows access to state via ``` getState ```
* Allows state to be updated via ``` dispatch(action) ```


***Creation of store***

```

import { createStore } from 'redux';

let store = createStore(myApp)

// Dispatch actions using store

store.dispatch(ADD_USER({ name: 'Anton' }))
store.dispatch(ADD_USER({ name: 'Alban' }))
....

```

[ Redux Dev Tools ](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) Great way to debug and monitor your application state. View actions, application state and so on in your browser.

<hr/>

## React

***Stateful vs Stateless Component***

A stateless component is a component that doesn't have any state. Stateless components are usually(?) function based there for called SFC (Stateless Functional Component). SFC Example:

```

const Header = (props) => (
    <div>
        <header>
            {props.title}
        </header>
    </div>
)

```
Note: All components should start with a uppercase character, since HTML start with lower case. React with issue a warning if you ignore this.

Stateful component is a component that have some state. The state could be for example a collapsable list, when a button is pressed the component changes state collapsing the list, or expanding it. Example:

```

class MyPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            collapsed : false
        }

        changeState = () => {
            this.setState((prevState) => ({ collapsed: !this.state.collapsed }))
        }

        render(){
            return(
                <div>
                    <ul collapsed = { this.state.collapsed }>
                        <li>item1</li>
                        <li>item2</li>
                        <li>item3</li>
                    </ul>
                    <button onClick = { this.changeState }> Change state </button>
                <div>
            )
        }
    }

}

```

A change in state forces the component and child components to rerender. State should be changed using the setState function, and not mutating the state. Mutating the state can cause unwanted side effects, and strange behaviour

```
    this.state.collapsed = false; // Never do this
```

***Props***

Components can be passed props, props are some parameters for a component and are accessible through props in a SFC or through this.props in a classbased component. Example:

```

const Header = (props) => (
    <div>
        <header>
            <h1> { props.title } </h1>
        </header>
    </div>
)

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: 'false'
        }
    }

    buttonClicked = () => {
        this.setState((prevState) => ({ clicked : !this.state.clicked }))
    }

    render(){
        return(
            <Header title = "Welcome!" />
        )
    }

}


```

***One-way data flow***

React enforces a one-way data flow, which means that parent components pass data to child components but not the other way around. State should always lie in a common owner, or a component higher up the hierarchy. E.g a child component need some data from an API, the parent component makes the API call, retrieves the data and then passed that data down to the child component.

Example:

```

const AlbumList = (props) => {

    return(
        <ul>
            { props.albums.map((album) => (
                <li> album </li>
            )) }
        </ul>
    )
}

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        axios.get(URL, ()
        .then((data) => {
            this.setState((prevState) => ({ albums : data.albums }))
        })
        .catch(() => {
            //Error handling
        })
    }

    render(){
        return(
            <div>
                <AlbumList albums = { albums }>
            </div>
        )
    }
}

```

***Conditional Rendering***

Sometimes it's useful to render something based upon its value, if it exists or similar.

Option 1:

```
render(){
    { item.title.length > 0 &&
        <h1>{item.title}</h1> // Renders only if there is a title
    }
}

```

Option2:

```
    {
        item.title.length > 0 ?
        (
            <div>
                {item.title}
            </div>
        )
        :
        (
            <div>
                No title available
            </div>
        )
    }

```













