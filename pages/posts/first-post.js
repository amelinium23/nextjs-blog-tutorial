import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/Layout"

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>This post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href={"/"}>Back to home!</Link>
            </h2>
            <Image
                src="/images/profile.jpg"
                width={400}
                height={400}
                alt="name"
            />
        </Layout>
    )
}