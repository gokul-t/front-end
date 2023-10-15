"use client"

import { MouseEvent } from "react";
import { deleteProduct } from "../products.service";
import { IProduct } from "../types/product-interface";
import { useRouter } from "next/navigation";

export default function DeleteProductButton({ product }: { product: IProduct }) {
    const router = useRouter();
    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        deleteProduct(product.id).then(() => {
            router.push("/products");
        });
    }
    return <button type="button" onClick={handleDelete} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
        <span className="sr-only">Delete Product</span>
    </button>
}