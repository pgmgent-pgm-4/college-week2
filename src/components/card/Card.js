import React from 'react'
import styled from './Card.module.scss'

const Card = ({ children, type = 'info' }) => {
    return (
        <article className={`${styled.card} ${styled[type]}`}>
          {children}
        </article>
    )
}

export default Card
