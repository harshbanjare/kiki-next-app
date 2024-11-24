import { Metadata } from "next";
import axios from "axios";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    try {
        const response = await axios.get(`https://api-sac6b737pq-uc.a.run.app/blogs/${params.id}`);
        const blog = response.data;

        return {
            title: blog.title,
            description: blog.shortContent.substring(0, 155) + "...",
            openGraph: {
                title: `${blog.title} | Kiki Beauty Blog`,
                description: blog.shortContent.substring(0, 155) + "...",
                images: [{
                    url: blog.img,
                    width: 1200,
                    height: 630,
                    alt: blog.title
                }],
            }
        };
    } catch (error) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }
} 