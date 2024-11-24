import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useEffect } from 'react'

import { Navigate, NavLink, useSearchParams } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddressBook from './AddressBook'
import PaymentMethod from './PaymentMethod'
import Orders from './Orders'
import { connect } from 'react-redux'
import { logoutUser } from '../../routines'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Account({ user, logoutUser }) {
    const [search, setSearch] = useSearchParams();
    const currentTab = search.get('section') || '...';
    const navigation = [
        { name: 'Dashboard', href: 'dashboard', current: true },
        { name: 'Information', href: 'information', current: false },
        { name: 'Address', href: 'address', current: false },
        { name: 'Orders', href: 'orders', current: false },
        { name: 'Payment', href: 'payment', current: false },
    ];
    useEffect(() => {
        setSearch('section=dashboard')
    }, [])

    const logout = () => {
        logoutUser();
        <Navigate to='/' />
    }
    return (
        <>
            <div className="min-h-screen md:flex ">
                <Disclosure as="nav" className="w-[20%]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex md:h-screen items-start md:mt-5 justify-between">
                            <div className="flex md:flex-col items-center">
                                <div className="md:block mx-0 overflow-x-auto w-screen md:w-auto">
                                    <div className="mt-10 flex md:flex-col items-baseline ">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={`/account?section=${item.href}`}
                                                isActive={item.href == currentTab}
                                                className={classNames(
                                                    item.href == currentTab ? 'bg-gray-900 text-white' : 'text-primaryNavy hover:bg-gray-700 hover:text-white',
                                                    'w-full px-3 py-2 text-sm font-medium my-2',
                                                )}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        <button className='w-full px-3 py-2 text-sm font-medium my-2 bg-red-600 text-white hover:bg-red-700' onClick={() => logout()}>Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.href == currentTab}
                                    className={classNames(
                                        item.href == currentTab ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            <button className='w-full px-3 py-2 text-sm font-medium my-2 bg-red-600 text-white hover:bg-red-700'
                                onClick={() => logout()}>
                                Logout
                            </button>

                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <div className="w-full">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Account {currentTab[0].toLocaleUpperCase()}{currentTab.slice(1)}</h1>
                    </div>
                    <main>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {currentTab == 'dashboard' && <Dashboard user={user} />}
                            {currentTab == 'address' && <AddressBook />}
                            {currentTab == 'payment' && <PaymentMethod />}
                            {currentTab == 'orders' && <Orders />}

                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = ({ user }) => {
    return { user }
}

const mapDispatchToProps = {
    logoutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)