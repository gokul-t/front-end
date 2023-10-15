import { ProductPagedList } from './page';
import { IProduct } from './types/product-interface';

type ErrorMessage = {
    status: number,
    error: string,
    message: string
}

function productApi() {
    return "http://localhost:8080/api/products";
}

function productApiFor(productId: number | null) {
    return productApi() + "/" + (productId ? + productId : "");
}

export async function fetchProducts(): Promise<ProductPagedList> {
    return fetch(productApi(), { cache: 'no-store' }).then(res => res.json())
}

export async function fetchProduct(productId: number): Promise<IProduct> {
    return fetch(productApiFor(productId), { cache: 'no-store' }).then(res => {
        if (res.ok)
            return res.json();
        return res.json().then((err: ErrorMessage) => Promise.reject(err.message));
    });
}

export async function createProduct(product: IProduct): Promise<number> {
    return fetch(productApi(), {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product), // body data type must match "Content-Type" header
    }).then(res => {
        const location = res.headers.get("Location");
        if (location)
            return Number(location.replaceAll(productApiFor(null), ""));
        return Promise.reject(new Error("Location details not provided in header"));
    });
}

export async function updateProduct(product: IProduct): Promise<boolean> {
    return fetch(productApiFor(product.id), {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product), // body data type must match "Content-Type" header
    }).then(res => res.ok);
}

export async function deleteProduct(productId: number): Promise<boolean> {
    return fetch(productApiFor(productId), {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.ok);
}

