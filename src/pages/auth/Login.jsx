import React from 'react'
import { BrandName } from '../../constants'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="py-16">
            <div className="flex bg-softPeach shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1705326454924-f6777522b030?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-700 text-center">{BrandName}</h1>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input placeholder='jhon@doe.com' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input placeholder='******' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className='mt-4'>
                        <div className="flex justify-end items-center">
                            <div className="text-xs text-gray-500"> Don't have an Account? </div>
                            <Link className='hover:underline block text-gray-700 text-sm font-bold ml-2' to={'/register'} >Register</Link >
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button href='/' >LogIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login