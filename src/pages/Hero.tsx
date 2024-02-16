import React from 'react'

export default function Hero({title}:{title:string}) {
    return (
        <section id="hero">
        <div className="hero container">
          <div>
            <h1>Hello,<span /></h1>
            <h1>My name is <span /></h1>
            <h1>{title}<span></span></h1>
            <a href="#projects" type="button" className="cta">Portfolio</a>
          </div>
        </div>
      </section>
    )
}
