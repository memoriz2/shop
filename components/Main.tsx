"use client";

import "./css/Main.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import Image from "next/image";

export type Product = {
    productId: number;
    productName: string;
    productPhoto?: string | string[];
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
                {selectedProduct && (
                    <div>
                        <h2>{selectedProduct.productName}</h2>
                        <p>상품 ID: {selectedProduct.productId}</p>
                        {Array.isArray(selectedProduct.productPhoto) ? (
                            selectedProduct.productPhoto.map((photo, idx) => (
                                <Image
                                    key={idx}
                                    src={photo || "/default.jpg"}
                                    alt={selectedProduct.productName}
                                    width={400}
                                    height={300}
                                />
                            ))
                        ) : (
                            <Image
                                src={
                                    selectedProduct.productPhoto ||
                                    "/default.jpg"
                                }
                                alt={selectedProduct.productName}
                                width={400}
                                height={300}
                            />
                        )}
                    </div>
                )}
            </main>
        </>
    );
}
