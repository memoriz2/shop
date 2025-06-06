"use client";

import Link from "next/link";
import "./css/Header.css";
import type { Product } from "./Main";

interface HeaderProps {
    onProductSelect: (product: Product) => void;
    products: Product[];
}

export default function Header({ onProductSelect, products }: HeaderProps) {
    return (
        <header>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li className="dropdown">
                        <Link href="/product">painting</Link>
                        <div className="submenu">
                            {Array.isArray(products) &&
                                products.map((product) => (
                                    <div
                                        key={product.productId}
                                        className="submenu-item"
                                        onClick={() => onProductSelect(product)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {product.productName}
                                    </div>
                                ))}
                        </div>
                    </li>
                    <li>
                        <Link href="/exhibition">exhibition</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
