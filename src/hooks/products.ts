import axios, { AxiosError } from 'axios';
import { useState, useEffect } from "react";
import { IProduct } from '../models';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setloading] = useState(false);
    const [error, setError] = useState('');

    /* Запрос данных с сервера */
    async function fetchProducts() {
        // Перехват ошибок
        try {
            setError('')
            setloading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setloading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setloading(false)
            setError(error.message)
        }



    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, error, loading }
}
