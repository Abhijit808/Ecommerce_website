import Link from 'next/link'
import React, { useState } from 'react'
import Button__primary from '../components/utlis/buttons/Button__primary'
import Input__primary from '../components/utlis/input_box/Input__primary'

const login = () => {
  const [username,setusername] =useState<string>("")
  const [password,setpassword] =useState<string>("")
  const [message,setmessage] = useState<string>("")
  const handlesubmit =(e:any)=>{
    e.preventDefault()
    console.log(username)
    console.log(password)
    const SendData = async()=>{
      const fetchUsers = await fetch("/api/hello",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
      })
      const response = await setmessage("hey posted")
      
    }
    SendData()
  }
  return (
      <div className="form__wrapper w-[40%] md:w-full aspect-square mx-auto flex justify-center items-center shadow-2xl p-2">
        {message}
        <form  method="post " className='flex flex-col gap-7' onSubmit={handlesubmit}>
        <h2 className='text-2xl text-center'>Login</h2>
            <div className="input flex flex-col">
                <label htmlFor="Username">Username</label>
                <Input__primary type ={"text"} name={"Username"} placeholder = {"Username"}  password = {setusername}/>
            </div>
            <div className="input flex flex-col">
                <label htmlFor="Password">Password</label>
                <Input__primary type ={"password"} name={"Password"} placeholder = {"Password"} password={setpassword}/> 
            </div>
            <div className="btns flex justify-center gap-4">
                  <Button__primary text={"Login"}/>
                <Link href="/signup">
                  <Button__primary text={"Signup"}/>
                </Link>
            </div>
        </form>
      </div>
  )
}

export default login