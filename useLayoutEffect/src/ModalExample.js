import { useLayoutEffect, useRef,useState } from "react"

export default function ModalExample(){
    const [show, setShow]= useState(false)
    const popup = useRef()
    const button = useRef()


    // more performant tham useEffect when dealing ith the DOM
useLayoutEffect(()=>{
if(popup.current == null || button.current== null) return
const {bottom} = button.current.getBoundingClientRect()
popup.current.style.top = `${bottom + 25}px`
},[show])

return (
    <>
    <button ref={button} onClick={()=>setShow(prev=> !prev)}>
        Click Here
    </button>
    {show && (
        <div style={{position: 'absolute'}} ref={popup}>
            This is a popup
        </div>
    )
    }
    </>
)
}