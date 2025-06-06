"use client";

import "./css/Main.css";
import { useState } from "react";
import Image from "next/image";

export default function Main({}) {
    type Product = {
        productId: number;
        productName: string;
        productPhoto?: string;
    };

    const [selectedProduct] = useState<Product | null>(null);

    if (selectedProduct) {
        return (
            <main>
                <h2>{selectedProduct.productName}</h2>
                <p>상품 ID: {selectedProduct.productId}</p>
                <Image
                    src={selectedProduct.productPhoto || "/default.jpg"}
                    alt={selectedProduct.productName}
                />
            </main>
        );
    }
}
