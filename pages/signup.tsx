import React, { useState } from 'react'
import Link from 'next/link'
import Button__primary from '../components/utlis/buttons/Button__primary'
import Input__primary from '../components/utlis/input_box/Input__primary'
const signup = () => {
    const [userName,setuserName] =useState<string>("")
    const [email,setemail] =useState<string>("")
    const [pho,setphno] =useState<string>("")
    const [password,setpassword] =useState<string>("")
    const [confirmPassword,setconfirmPassword] =useState<string>("")
  
    const handlesubmit =(e:any)=>{
        e.preventDefault()
        console.log(userName)
        console.log(password)
        const SendData = async()=>{
          const fetchUsers = await fetch("http://localhost:3000/api/signup",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({userName,email,pho,password,confirmPassword})
          })
        //   const response = await setmessage("hey posted")
          
        }
        SendData()
      }
  return (
    <div className="form__wrapper w-[40%] md:w-full aspect-square mx-auto my-20 flex justify-center items-center shadow-2xl p-2">
        <form  method="post " className='flex flex-col gap-7 'onSubmit={handlesubmit}>
        <h2 className='text-2xl text-center'>Sign up</h2>
            <div className="input flex flex-col">
                <label htmlFor="Username">Name</label>
                <Input__primary type ={"text"} name={"name"} placeholder = {"Username"} password={setuserName}/>
            </div>
            <div className="input flex flex-col">
                <label htmlFor="Username">Email</label>
                <Input__primary type ={"email"} name={"email"} placeholder = {"email"} password={setemail}/>
            </div>

            <div className="input flex flex-col">
                <label htmlFor="Username">Phone Number</label>
                <Input__primary type ={"number"} name={"number"} placeholder = {"phone no"} password={setphno}/>
            </div>
            <div className="input flex flex-col">
                <label htmlFor="Password">Password</label>
                <Input__primary type ={"password"} name={"Password"} placeholder = {"Password"} password={setpassword}/> 
            </div>
            <div className="input flex flex-col">
                <label htmlFor="Password">Confirm Password</label>
                <Input__primary type ={"password"} name={"conformPassword"} placeholder = {"Password"} password={setconfirmPassword}/> 
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

export default signup