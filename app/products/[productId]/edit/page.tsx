"use client";

import ProductForm from '@/app/products/components/product-form';
import { fetchProduct, updateProduct } from '@/app/products/products.service';
import { IProduct } from '@/app/products/types/product-interface';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductPage({
    params: { productId },
}: {
    params: { productId: number }
}) {
    const [product, setProduct] = useState({} as IProduct);
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        fetchProduct(productId).then(setProduct);
    }, [productId]);
    const handleSubmit = (editedProduct: IProduct) => {
        updateProduct({
            ...product,
            ...editedProduct
        }).then(() => {
            router.push(pathname.replace("/edit", ""));
        });
    }
    return <ProductForm key={product.id} onSubmit={handleSubmit} product={product} />
}