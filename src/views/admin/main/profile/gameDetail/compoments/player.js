import React from 'react'
import styles from './player.css'

export default function Players({ src }) {
  return (
    <div className={styles.videobox}>
      <iframe
        width="100%"
        height="492"
        src={src}
        title="Hook"
        frameborder="0"
        bordeRadius='32px'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}