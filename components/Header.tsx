"use client";

import Link from "next/link";
import "./css/Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [products, setProducts] = useState<
        { productId: number; productName: string }[]
    >([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/products");
            const data = await response.json();
            console.log("API Response:", data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <header>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li className="dropdown">
                        <Link href="/product">painting</Link>
                        <ul className="submenu">
                            {Array.isArray(products) &&
                                products.map((product) => (
                                    <li key={product.productId}>
                                        <Link
                                            href={`/product/${product.productId}`}
                                        >
                                            {product.productName}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </li>
                    <li>
                        <Link href="/exhibition">exhibition</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
