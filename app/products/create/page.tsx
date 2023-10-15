"use client"

import ProductForm from "../components/product-form";
import { createProduct } from "../products.service";
import { IProduct } from "../types/product-interface";
import { usePathname, useRouter } from 'next/navigation';

export default function Create() {
    const router = useRouter();
    const pathname = usePathname();
    const handleSubmit = (editedProduct: IProduct) => {
        createProduct(editedProduct).then((productId) => {
            router.push(pathname.replace("/create", "/" + productId));
        });
    }
    return <ProductForm onSubmit={handleSubmit} product={{} as IProduct} />
}