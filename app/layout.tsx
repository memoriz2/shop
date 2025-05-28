import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "쇼핑몰",
    description: "모들 미술학원", // 검색 엔진에 표시될 웹사이트 설명
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
