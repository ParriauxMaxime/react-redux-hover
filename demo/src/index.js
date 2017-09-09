import React, {Component} from 'react'
import {render} from 'react-dom'

import {HoverEffect, hover} from '../../src/index'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(combineReducers({
    hover
}))

class Demo extends Component {
    constructor(props) {
        super(props)
        this.container = {
            display       : 'flex',
            flexDirection : 'row',
            width         : '100%',
            height        : '100%',
            justifyContent: 'space-between'
        }
        this.box = (show, color, colorHover) => ({
            height         : '100%',
            width          : '100%',
            display        : 'flex',
            justifyContent : 'center',
            alignItems     : 'center',
            backgroundColor: show ? colorHover : color
        })
        this.hoverStyle = {
            width : '100%',
            height: '500px',
        }
    }

    render() {
        return <Provider store={store}>
            <div style={ {width: '100%', height: '100%', textAlign: 'center'}  }>
                <h1>redux-hover Demo</h1>
                <div style={this.container}>
                    <HoverEffect id="lol" style={this.hoverStyle}>
                        { show =>
                            <div style={this.box(show, '#FF5A36', '#B0E89E')}>
                                <HoverEffect id="nested" style={{width: 100, height: 100}}>
                                    { showNested =>
                                        <div style={this.box(showNested, '#FDD561', '#8F8992')}>
                                            Nested.
                                        </div>
                                    }
                                </HoverEffect>
                            </div>
                            }
                    </HoverEffect>
                    <HoverEffect id="depend" style={this.hoverStyle}>
                        { show =>
                            <div style={this.box(show, '#8DBAD8', '#19325C')}>
                                Hello there
                            </div>
                        }
                    </HoverEffect>
                </div>
            </div>
        </Provider>
    }
}

render(<Demo/>, document.querySelector('#demo'))
