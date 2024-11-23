import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

import { NavLink, useSearchParams } from 'react-router-dom'
import Dashboard from './dashboard'
import AddressBook from './addressBook'
import PaymentMethod from './PaymentMethod'
import Orders from './Orders'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Account() {
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
    return (
        <>
            <div className="min-h-screen md:flex ">
                <Disclosure as="nav" className="">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex md:h-screen items-start md:mt-5 justify-between">
                            <div className="flex md:flex-col items-center">
                                <div className="md:block">
                                    <div className="mt-10 flex md:flex-col items-baseline space-x-4">
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
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <div className="w-full">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Account {currentTab[0].toLocaleUpperCase()}{currentTab.slice(1)}</h1>
                    </div>
                    <main>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {currentTab == 'dashboard' && <Dashboard />}
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

export default Account