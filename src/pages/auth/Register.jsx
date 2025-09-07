import React, { useState } from 'react'
import { BrandName } from '../../constants'
import Button from '../../components/Button'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../routines'
import Icon from '../../components/Icon'

const Register = ({ registerUser, user }) => {
    const [registerData, setRegisterData] = useState({
        first_name: "",
        last_name: "",
        email: '',
        password: ''
    });

    const handleOnChange = ({ target: { name, value } }) => {
        setRegisterData({ ...registerData, [name]: value })
    };

    const handleSubmit = () => {
        registerUser(registerData)
    }

    if (user && user.token) {

        return <Navigate to={'/'} />
    }

    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('input-password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    return (
        <div className="py-16">
            <div className="flex bg-softPeach shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-700 text-center">{BrandName}</h1>
                    <p className="text-xl text-gray-600 text-center">Become a Member!</p>
                    <div className='flex justify-between gap-1'>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                            <input onChange={handleOnChange} name='first_name' placeholder='jhon' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                            <input onChange={handleOnChange} name='last_name' placeholder='doe' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input onChange={handleOnChange} name='email' placeholder='jhon@doe.com' className="bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        </div>
                        <div className='flex justify-between items-center bg-white text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 w-full appearance-none'>
                            <input id="input-password" onChange={handleOnChange} name='password' placeholder='******' className="bg-white text-gray-700 focus:outline-none focus:ring-0 focus:shadow-outline border-none p-0 block w-[80%] appearance-none" type="password" />
                            <Icon iconName="eye" color={'text-gray-700'} onClick={() => { togglePasswordVisibility() }} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="flex justify-end items-center">
                            <div className="text-xs text-gray-500"> Already have an Account? </div>
                            <Link className='hover:underline block text-gray-700 text-sm font-bold ml-2' to={'/login'} >LogIn</Link >
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button style={{ width: '100%', fontWeight: 700 }} onClick={handleSubmit}>Register</Button>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1652375152241-d3e62ab52b57?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    registerUser: register
}

const mapStateToProps = ({ user }) => {
    return { user }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)