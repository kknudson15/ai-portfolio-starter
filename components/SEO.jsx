import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
    title: "Kyle Knudson | AI & Data Engineering Leader",
    description: "Portfolio of Kyle Knudson, a data engineering leader specializing in AI, cloud, and enterprise data systems.",
    image: "https://your-portfolio-url.com/images/og-image.png", // distinct image for social sharing
    type: "website",
};

export default function SEO({ title, description, image, type }) {
    const router = useRouter();
    const meta = {
        title: title ? `${title} | Kyle Knudson` : defaultMeta.title,
        description: description || defaultMeta.description,
        image: image || defaultMeta.image,
        type: type || defaultMeta.type,
        url: `https://your-portfolio-url.com${router.asPath}`,
    };

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="canonical" href={meta.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={meta.type} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={meta.url} />
            <meta property="twitter:title" content={meta.title} />
            <meta property="twitter:description" content={meta.description} />
            <meta property="twitter:image" content={meta.image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
