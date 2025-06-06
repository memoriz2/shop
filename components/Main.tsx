"use client";

import "./css/Main.css";
import { useState } from "react";

export default function Main({}) {
    type Product = {
        productId: number;
        productName: string;
        productPhoto?: string;
    };

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    if (selectedProduct) {
        return (
            <main>
                <h2>{selectedProduct.productName}</h2>
                <p>상품 ID: {selectedProduct.productId}</p>
                <img
                    src={selectedProduct.productPhoto}
                    alt={selectedProduct.productName}
                />
            </main>
        );
    }

    return <main></main>;
}
