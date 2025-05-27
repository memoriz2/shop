"use client"; // 클라이언트 컴포넌트임을 명시

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* 로고 */}
                    <Link href="/" className="text-2xl font-bold">
                        쇼핑몰
                    </Link>

                    {/* 네비게이션 메뉴 */}
                    <div className="space-x-4">
                        <Link href="/products" className="hover:text-blue-600">
                            상품목록
                        </Link>
                        <Link href="/cart" className="hover:text-blue-600">
                            장바구니
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
