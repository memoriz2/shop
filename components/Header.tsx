"use client";

import Link from "next/link";
import "./css/Header.css";

export default function Header() {
    return (
        <header>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <Link href="/">홈</Link>
                    </li>
                    <li>
                        <Link href="/product">상품목록</Link>
                    </li>
                    <li>
                        <Link href="/cart">장바구니</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
