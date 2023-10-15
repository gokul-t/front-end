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
        return <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Network error!</span> {err as string}
        </div>
    }
}