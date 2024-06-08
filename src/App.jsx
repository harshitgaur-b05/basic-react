import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
const [length,setlength]=useState(8);
const [noallow,setnumberallow]=useState(false);
const [challow,setallow]=useState(false);
const [password,setpass]=useState("");

const passref=useRef(null)
//use call back
const passwordgen=useCallback(()=>{
  let  alpha="ABCDEFFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let no="1234567890";
  let sp="!@#$%^&*(){}:<>/.,';[]+-*/=-";
  let select=alpha;
  let pass="";

  if(noallow){
    select+=no;
  }
  if(challow){
    select+=sp;
  }
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*select.length +1)
    pass+=select.charAt(char);

  }
  setpass(pass);
},  [length,noallow,challow,setpass])

const passwordgenref =useCallback(()=>{
passref.current?.select()
window.navigator.clipboard.writeText(password);
},[password])
//use effect
useEffect(passwordgen,[length,noallow,challow,setpass])
  return (
    
< >
<h1 className='m- mx-4 '>password genrator</h1>
<div>
  <input 
  type='text'
  value={password}
    placeholder='password'
    ref={passref}
    readOnly
  ></input>
  <button
  onClick={passwordgenref}
  className=''>copy</button>
</div>
<div>
  <div>
  <label htmlFor="len">length : {length}</label>
    <input type="range" 
    
    htmlFor="len"
    min={6}
    max={100}
    onChange={(e)=>{setlength(e.target.value)}}
    />
  
    <input 
    type='checkbox'
    htmlFor ="numberall"
    onClick={()=>{setnumberallow(!(noallow))}}
    />
    <label htmlFor="numberall">number</label>
    <input 
    type='checkbox'
    htmlFor ="char"
    onChange=
    {()=>{setallow((prev)=>!prev)}}
    />
    <label htmlFor="char">charachter</label>
    
  </div>
</div>
</>
    
  )
}

export default App








// const [length, setLength] = useState(8)
// const [numberAllowed, setNumberAllowed] = useState(false);
// const [charAllowed, setCharAllowed] = useState(false)
// const [password, setPassword] = useState("")

// //useRef hook
// const passwordRef = useRef(null)

// const passwordGenerator = useCallback(() => {
//   let pass = ""
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//   if (numberAllowed) str += "0123456789"
//   if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//   for (let i = 1; i <= length; i++) {
//     let char = Math.floor(Math.random() * str.length + 1)
//     pass += str.charAt(char)
    
//   }

//   setPassword(pass)


// }, [length, numberAllowed, charAllowed, setPassword])

// const copyPasswordToClipboard = useCallback(() => {
//   passwordRef.current?.select();
//   passwordRef.current?.setSelectionRange(0, 999);
//   window.navigator.clipboard.writeText(password)
// }, [password])

// useEffect(() => {
//   passwordGenerator()
// }, [length, numberAllowed, charAllowed, passwordGenerator])

/* <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
<h1 className='text-white text-center my-3'>Password generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
  <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
  />
  <button
  onClick={copyPasswordToClipboard}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
  >copy</button>
  
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input 
  type="range"
  min={6}
  max={100}
  value={length}
   className='cursor-pointer'
   onChange={(e) => {setLength(e.target.value)}}
    />
    <label>Length: {length}</label>
</div>
<div className="flex items-center gap-x-1">
<input
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={() => {
        setNumberAllowed((prev) => !prev);
    }}
/>
<label htmlFor="numberInput">Numbers</label>
</div>
<div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
            setCharAllowed((prev) => !prev )
        }}
    />
    <label htmlFor="characterInput">Characters</label>
</div>
</div>
</div> */