import React from 'react'

export default function groupCard(props) {
  return (
    <>
        <div class="mb-20 text-center">
            <img src={props.img} class="w-60 h-60 border-2 border-black" />
            <a href={props.link}>{props.name}</a>
            <p class="italic">{props.role}</p>
        </div>
    </>
  )
}
