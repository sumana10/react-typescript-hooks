import React,{useRef, useEffect} from 'react'



export default function DomRef() {

  // non null assertion
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}
