import React from 'react'
import { BrandName } from '../../constants'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="py-16">
            <div className="flex bg-softPeach rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2">
                    <h1 className="text-4xl font-semibold text-gray-700 text-center">{BrandName}</h1>
                    <p className="text-xl text-gray-600 text-center">Become a Member!</p>
                    <div className='flex justify-between gap-1'>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                            <input placeholder='jhon@doe.com' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                            <input placeholder='jhon@doe.com' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input placeholder='jhon@doe.com' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        </div>
                        <input placeholder='******' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className='mt-4'>
                        <div className="flex justify-end items-center">
                            <div className="text-xs text-gray-500"> Already have an Account? </div>
                            <Link className='hover:underline block text-gray-700 text-sm font-bold ml-2' to={'/login'} >LogIn</Link >
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button style={{ width: '100%', fontWeight: 700 }} >Register</Button>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}>
                </div>
            </div>
        </div>
    )
}

export default Register