import React from 'react'
import img from '../assets/img/cats.jpg'

export function HomePage() {
  return (
    <section className="home">
      <h1>THIS BE HOME PAGE YO!</h1>
      <div>
        <img src={img} />
      </div>
    </section>
  )
}
