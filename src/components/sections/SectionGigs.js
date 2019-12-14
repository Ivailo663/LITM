import React from 'react'
import s from '../../style/SectionGigs.module.scss'

export default function SectionGigs() {
    return (
        <div className={`${s.gigsContainer}`}>
            <h1 className={`${s.Header}`}>GIG DATES</h1>
            <div>
                <h2>Sorry, no upcoming dates.</h2>
                <p>You can subscribe to see when new gig dates are announced.</p>
                <button className={`btn ${s.Subscribe}`}>SUBSCRIBE</button>
            </div>
        </div>
    )
}
