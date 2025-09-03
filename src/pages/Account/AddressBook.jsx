import React, { useState } from 'react';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { addAddress, deleteAddress, updateAddress } from '../../routines';

const AddressCard = ({ props, idx, setEditAddress, setEditAddressObject, addressId, deleteAddress }) => {
    const { id, first_name, address1, city, last_name } = props
    return (<div className='m-2 min-w-24 max-w-xs h-24 cursor-pointer'>
        <div className='flex justify-start items-start mb-3'>
            <span className='border p-2 text-bold text-xl bg-primaryNavy text-white mr-3'>{idx}</span>
            <p className='font-semibold text-gray-700'>
                {first_name} {last_name}
                <address className='text-gray-400 font-normal'>{address1} ,{city}</address>
            </p>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <button id={id} className=' border-primaryNavy border-2 font-semibold text-primaryNavy hover:bg-primaryNavy hover:text-white 0.7s ease-out flex-1 flex justify-center p-2 h-auto'
                onClick={() => {
                    setEditAddress(true);
                    setEditAddressObject(props)
                }}>Edit

                <Icon size={'w-5 mx-3'} iconName='pencilsquare' color={'white'} />

            </button>
            <button className={' text-primaryNavy '} onClick={() => { deleteAddress(addressId) }}> <Icon iconName='trash' /></button>
        </div>
    </div>)
};

const EditAddress = ({ address, setEditAddress, setEditAddressObject, addAddress, updateAddress }) => {

    const [addressObj, setAddressObj] = useState({ ...address })

    const handleAddressChange = () => {
        if (addressObj.id != undefined) {
            updateAddress(addressObj)
            setEditAddress(false)
        } else {
            addAddress(addressObj)
            setEditAddress(false)
        }
    }

    const handleOnChange = ({ target: { name, value } }) => {
        if ((name === 'first_name' || name === 'last_name')) {
            setAddressObj({ ...addressObj, [name]: value.slice(0, 35) })
        }
        if ((name === 'address1' || name === 'address2')) {
            setAddressObj({ ...addressObj, [name]: value.slice(0, 50) })
        }
        if (name === 'is_primary_address') {
            setAddressObj({ ...addressObj, [name]: value === 'on' });
        } else {
            setAddressObj({ ...addressObj, [name]: value })
        }
    }
    return (<div class="max-w-full mx-auto p-6 bg-white border border-gray-200 ">
        <div className='flex justify-between items-center gap-2'>

            <div class="mb-4 w-full">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.first_name}
                />
            </div>


            <div class="mb-4 w-full">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.last_name}
                />
            </div>
        </div>

        <div className='flex justify-between items-center gap-2'>
            <div class="mb-4 w-full">
                <label for="address1" class="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                    type="text"
                    id="address1"
                    name="address1"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.address1}
                />
            </div>


            <div class="mb-4 w-full">
                <label for="address2" class="block text-sm font-medium text-gray-700">Address Line 2</label>
                <input
                    type="text"
                    id="address2"
                    name="address2"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.address2}
                />
            </div>
        </div>


        <div class="mb-4">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <input
                type="text"
                id="city"
                name="city"
                class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                onChange={handleOnChange}
                value={addressObj.city}
            />
        </div>

        <div class="mb-4">
            <label for="zip" class="block text-sm font-medium text-gray-700">ZIP Code</label>
            <input
                type="text"
                id="zip"
                name="zip"
                class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                onChange={handleOnChange}
                value={addressObj.zip}
            />
        </div>
        <div className='flex justify-between items-center gap-2'>

            <div class="mb-4 w-full">
                <label for="state" class="block text-sm font-medium text-gray-700">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.state}
                />
            </div>


            <div class="mb-4 w-full">
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    class="mt-1 block w-full border-gray-300  shadow-sm focus:ring-primaryNavy focus:border-primaryNavy sm:text-sm"
                    onChange={handleOnChange}
                    value={addressObj.country}
                />
            </div>

        </div>
        <div class="mb-4">
            <label for="is_primary_address" class="inline-flex items-center">
                <input
                    type="checkbox"
                    id="is_primary_address"
                    name="is_primary_address"
                    class="rounded border-gray-300 text-primaryNavy shadow-sm focus:ring-primaryNavy"
                    onChange={handleOnChange}
                    checked={addressObj.is_primary_address}
                />
                <span class="ml-2 text-sm text-gray-700">Primary Address</span>
            </label>
        </div>


        <div className='flex justify-between items-center gap-5'>
            <button
                type="submit"
                class="w-full flex-1 bg-accentGold text-white py-2 px-4 shadow hover:bg-primaryNavy focus:outline-none focus:ring-2 focus:ring-primaryNavy focus:ring-offset-2"
                onClick={handleAddressChange}
            >
                Save
            </button>
            <button className='border-2 border-primaryNavy py-2 px-4' onClick={() => {
                setEditAddress(false);
                setEditAddressObject(null)
            }
            }>
                Cancel
            </button>
        </div>
    </div>
    )
}

const AddressBook = ({ addAddress, updateAddress, address, deleteAddress }) => {
    const [editAddress, setEditAddress] = useState(false)
    const [editAddressObject, setEditAddressObject] = useState(address || {
        "is_primary_address": false,
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zip": "",
        "country": "",
        "first_name": "",
        "last_name": ""
    })

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='text-primaryNavy font-bold text-xl mb-5'> Address Book</div>
                {!editAddress && <button className='w-26 bg-primaryNavy text-white font-semibold px-4 py-2 flex justify-start' onClick={() => setEditAddress(true)}>
                    <Icon iconName='plus' className='mr-3 text-white' /> Add Address
                </button>}
            </div>
            {!editAddress && <div className='grid grid-cols-3'>
                {address.map((address, idx) => {
                    return (
                        <AddressCard
                            props={address}
                            key={idx}
                            idx={idx + 1}
                            setEditAddress={setEditAddress}
                            setEditAddressObject={setEditAddressObject}
                            deleteAddress={deleteAddress}
                            addressId={address.id}
                        />
                    )
                })}
            </div>}
            {editAddress && <EditAddress
                address={editAddressObject}
                setEditAddress={setEditAddress}
                setEditAddressObject={setEditAddressObject}
                addAddress={addAddress}
                updateAddress={updateAddress}
            />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    address: state.address,
});
const mapDispatchToProps = {
    addAddress,
    updateAddress,
    deleteAddress
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)