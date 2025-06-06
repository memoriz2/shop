import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "갤러리",
    description: "임다훈 작가", // 검색 엔진에 표시될 웹사이트 설명
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
