"use client";

import "./css/Main.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import Image from "next/image";

export type Product = {
    productId: number;
    productName: string;
    productPhoto?: string;
};

export default function Main() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <Header onProductSelect={setSelectedProduct} products={products} />
            <main>
                {selectedProduct ? (
                    <div>
                        <h2>{selectedProduct.productName}</h2>
                        <p>상품 ID: {selectedProduct.productId}</p>
                        <Image
                            src={selectedProduct.productPhoto || "/default.jpg"}
                            alt={selectedProduct.productName}
                            width={400}
                            height={300}
                        />
                    </div>
                ) : (
                    <ul>
                        {products.map((product) => (
                            <li key={product.productId}>
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {product.productName}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
}
