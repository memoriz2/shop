"use client";

import Link from "next/link";
import "./css/Header.css";

export default function Header() {
    return (
        <header>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/product">painting</Link>
                    </li>
                    <li>
                        <Link href="/exhibition">exhibition</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
