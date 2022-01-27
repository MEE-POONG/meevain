import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {IoLogOutOutline} from 'react-icons/io5'
import {HiOutlineDotsVertical} from 'react-icons/hi'

export default function ModalIconLogout() {
  return (
    <div>
        <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <HiOutlineDotsVertical/>
          </Menu.Button>
        </div>
        
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <IoLogOutOutline
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoLogOutOutline
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    ออกจากระบบ
                  </button>
                )}
              </Menu.Item>
              
            </div>
          </Menu.Items>
        
      </Menu>
    </div>
    </div>
  ) ;
}
