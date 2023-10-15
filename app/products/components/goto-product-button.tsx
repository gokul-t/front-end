"use client"

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { IProduct } from "../types/product-interface";

export default function GoToProductButton({ product }: { product: IProduct }) {
    const router = useRouter();
    const handleGoto = (event: MouseEvent<HTMLButtonElement>) => {
        router.push("/products/" + product.id);
    }
    return <button type="button" onClick={handleGoto} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
        <span className="sr-only">Go to Product</span>
    </button>
}