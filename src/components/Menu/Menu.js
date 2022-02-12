import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Menu = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillInfoCircle />,
    className: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillContacts />,
    className: 'nav-text'
  },
  {
    title: 'Work',
    path: '/work',
    icon: <AiIcons.AiTwotoneBook />,
    className: 'nav-text'
  },
]