import React from 'react'
import { FiArrowRight, FiArrowDown, FiArrowLeft, FiArrowUp } from 'react-icons/fi'

const Arrow = props => {
  switch (props.direction) {
    case 'up':
      return (
        <div className={props.className} onClick={e => props.customClickEvent(props.direction, e)}>
          <FiArrowUp />
        </div>
      )
    case 'left':
      return (
        <div className={props.className} onClick={e => props.customClickEvent(props.direction, e)}>
          <FiArrowLeft />
        </div>
      )
    case 'down':
      return (
        <div className={props.className} onClick={e => props.customClickEvent(props.direction, e)}>
          <FiArrowDown />
        </div>
      )
    case 'right':
      return (
        <div className={props.className} onClick={e => props.customClickEvent(props.direction, e)}>
          <FiArrowRight />
        </div>
      )
  }
}

export default Arrow
