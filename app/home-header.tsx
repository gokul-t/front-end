'use client'

import { usePathname } from 'next/navigation';
import Header, { Menu } from './components/header';

export default function HomeHeader() {
    const pathname = usePathname()
    const menus: Menu[] = [{
        title: "Products",
        path: "/products"
    }, {
        title: "Create Product",
        path: "/products/create"
    }];

    const regex = /\/products\/\d+/;
    if (regex.test(pathname)) {
        menus.push({
            title: "Edit Product",
            path: regex.exec(pathname) + "/edit"
        });
    }
    return (
        <Header menus={menus} />
    )
}