"use client";

import "./css/Main.css";
import Header from "./Header";
import { useState, useEffect, HTMLAttributes } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./css/Main.module.css";

export type ProductPhoto = {
    url: string;
    filename?: string;
};

export type Product = {
    productId: number;
    productName: string;
    productPhoto?: ProductPhoto | ProductPhoto[];
    description?: string;
};

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
    currentSlide?: number;
    slideCount?: number;
    direction: "left" | "right";
}

function Arrow(props: ArrowProps) {
    const { className, style, onClick, direction } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                width: 40,
                height: 40,
                zIndex: 3,
                opacity: 1,
                fontSize: 40,
                color: "#444",
                boxShadow: "none",
            }}
            onClick={onClick}
        >
            {direction === "left" ? "<" : ">"}
        </div>
    );
}

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

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
    };

    return (
        <>
            <Header onProductSelect={setSelectedProduct} products={products} />
            <main>
                {selectedProduct && (
                    <div className={styles.detailWrapper}>
                        <h2>{selectedProduct.productName}</h2>
                        <div className={styles.sliderWrapper}>
                            {Array.isArray(selectedProduct.productPhoto) &&
                            selectedProduct.productPhoto.length > 0 ? (
                                <Slider {...sliderSettings}>
                                    {selectedProduct.productPhoto.map(
                                        (photo: ProductPhoto, idx: number) => (
                                            <div
                                                key={idx}
                                                className={styles.slideItem}
                                            >
                                                <Image
                                                    src={photo.url}
                                                    alt={
                                                        photo.filename ||
                                                        selectedProduct.productName
                                                    }
                                                    width={400}
                                                    height={300}
                                                />
                                            </div>
                                        )
                                    )}
                                </Slider>
                            ) : selectedProduct.productPhoto &&
                              (selectedProduct.productPhoto as ProductPhoto)
                                  .url ? (
                                <Image
                                    src={
                                        (
                                            selectedProduct.productPhoto as ProductPhoto
                                        ).url
                                    }
                                    alt={
                                        (
                                            selectedProduct.productPhoto as ProductPhoto
                                        ).filename ||
                                        selectedProduct.productName
                                    }
                                    width={400}
                                    height={300}
                                />
                            ) : (
                                <Image
                                    src={"/default.jpg"}
                                    alt={selectedProduct.productName}
                                    width={400}
                                    height={300}
                                />
                            )}
                        </div>
                        {selectedProduct.description && (
                            <p style={{ marginTop: 20 }}>
                                {selectedProduct.description}
                            </p>
                        )}
                    </div>
                )}
            </main>
        </>
    );
}
