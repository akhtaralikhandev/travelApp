import React from 'react'

export default function SectionsHeading({ children, title, desc, titleClass, descClass }) {
    return (
        <>
            <div className="container">
                {
                    title ? (<h4 className={'sec__title '+titleClass} style={{position:"static"}}>{title}</h4>) : ' '
                }
                {
                    desc ? (<p className={'sec__desc '+descClass} style={{position:"static"}}>{desc}</p>) : ' '
                }
            </div>
            {/* {children */}
        </>
    )
}
