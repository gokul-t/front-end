import { IProduct } from '../types/product-interface';
import DeleteProductButton from './delete-product-button';
import GoToProductButton from './goto-product-button';

export default function Product({ product }: { product: IProduct }) {
    const { name, quantity, size }: IProduct = product;
    return <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{quantity.toString()}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{size}</p>
        <GoToProductButton product={product} />
        <DeleteProductButton product={product} />
    </div>;
}