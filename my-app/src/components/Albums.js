import React, { useState } from "react"
import Album from "./Album"
import albums from "./data"

const Albums = () => {
  const [data, setData] = useState(albums)
  const [input, setInput] = useState("")
  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
  const filter = () => {
    setData(
      albums.filter(
        album => album.artist == input || album.album_title == input
      )
    )
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="search" placeholder onChange={searchHandler} />
        <button onClick={filter}>Search</button>
      </div>

      <div style={{ display: "flex" }}>
        {data.map(album => (
          <Album album={album} />
        ))}
      </div>
    </>
  )
}

export default Albums
