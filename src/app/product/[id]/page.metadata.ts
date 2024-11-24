import { Metadata } from "next";
import { products } from "@/data/products";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = products.find(p => p.id.toString() === params.id);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found.",
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | Kiki Beauty`,
            description: product.description,
            images: [{
                url: product.images[Object.keys(product.images)[0]][0],
                width: 1200,
                height: 630,
                alt: product.name
            }],
        }
    };
} 