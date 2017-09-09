# react-redux-hover

react-redux-hover is a small and simple module to manage hover effect on react component.

#### 1. Get Started
#### 2. Make your own implementation

## Get Started :

``` javascript
import { HoverEffect, hover } from 'react-redux-hover';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom'

const store = createStore(combineReducers({
  // Import 'hover' from react-redux-hover into your reducers
  hover
}));

const App = () => (
    <Provider store={store}>
        <HoverEffect id="AnUniqueIdentifier">
        {
            show => //show is a boolean.
                <div style={{
                    backgroundColor: show ? 'red' : 'blue'
                }}>
                    Hello world!
                </div>
        }
)

render(<App/>, document.querySelector('#app'))

```

The hoverEffect is a component who return a callback function with a parameters to manage hover effect.
(here ```show```)