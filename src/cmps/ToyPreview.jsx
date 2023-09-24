import React from 'react'
import { NavLink } from 'react-router-dom'

export function ToyPreview({ toy, onRemove }) {
  //console.log("🚀 ~ file: ToyPreview.jsx:5 ~ ToyPreview ~ toy:", toy)
  function getRandomToyImage() {
    const width = 300 // You can specify the desired width of the image
    const height = 300 // You can specify the desired height of the image
    const randomImageId = Math.floor(Math.random() * 1000) // Generate a random image ID

    const imageUrl = `https://picsum.photos/${width}/${height}?random=${randomImageId}`

    return imageUrl
  }
  return (
    <div className="toy-card">
      <button onClick={() => onRemove(toy._id)} className="btn-remove">
        X
      </button>
      <div className="toy-name">{toy.name}</div>
      <div className="toy-labels">
        {toy.labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <img src={getRandomToyImage()} alt="" />

      <div>In Stock: {toy.inStock ? 'Yes' : 'No'}</div>
      <div>Price: {`${toy.price}`}</div>

      <section className="toy-prev-btns">
        <NavLink className="header-link" to={`/toy/edit/${toy._id}`}>
          Edit
        </NavLink>
        <NavLink className="header-link" to={`/toy/details/${toy._id}`}>
          Details
        </NavLink>
      </section>
    </div>
  )
}
