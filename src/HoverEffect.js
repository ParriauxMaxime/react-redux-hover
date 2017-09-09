/***************************************
 ** O-rizon development
 ** Created by Maxime Parriaux
 ** 30/08/17 - 16:04
 ** HoverEffect.js
 ** 2017 - All rights reserved
 ***************************************/

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const defaultState = {
}

export const reducers = (state = defaultState, action ) => {
    switch (action.type) {
        case 'HOVERED': return Object.assign({}, ...state, {[action.id]: true})
        case 'UNHOVERED': return Object.assign({}, ...state, {[action.id]: false})
        default: return state
    }
}

const onHover = (id) => ({
    type: 'HOVERED',
    id
})

const onOutHover = (id) => ({
    type: 'UNHOVERED',
    id
})

const HoverEffectComponent = ({children, style, onMouseEnter, onMouseLeave, id, hovered }) => (
    <div style={style}
         onMouseEnter={() => onMouseEnter(id)}
         onMouseLeave={() => onMouseLeave(id)}>
        {
            children(hovered)
        }
    </div>
)

HoverEffectComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        hovered: state.hover[ownProps.id],
        children: ownProps.children,
        style: ownProps.style
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        onMouseEnter: (id) => {dispatch(onHover(id))},
        onMouseLeave: (id) => {dispatch(onOutHover(id))}
    })
}

export const HoverEffect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HoverEffectComponent)