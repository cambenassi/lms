import React from 'react'

export default function groupCard(props) {
  return (
    <>
        <div class="mb-10 text-center">
            <img src={props.img} class="w-60 h-60 border-2 border-black rounded-full" />
            <a href={props.link} class="text-2xl">{props.name}</a>
            <p class="italic">{props.role}</p>
        </div>
    </>
  )
}
