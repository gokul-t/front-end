import { Metadata } from 'next';
import Product from '../components/product';
import { fetchProduct } from '../products.service';
import { IProduct } from '../types/product-interface';

export const metadata: Metadata = {
    title: 'Product',
}

export default async function ProductPage({
    params: { productId },
}: {
    params: { productId: number }
}) {
    try {
        const product: IProduct = await fetchProduct(productId);
        return <Product key={productId} product={product} />;
    } catch (err) {
        return <div>{err as string}</div>
    }
}