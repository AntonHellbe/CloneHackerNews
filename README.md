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


### Library notes for my self

***Redux***

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

Note: These are the same constants used in actions, when an action is dispatch the action with its type and payload will be passed to the reducer. For good pratice and less errors, create a separate file for the constants such as 'ADD_USER', 'REMOVE_USER' and so on and export.

Important: Reducers needs to be pure functions

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






