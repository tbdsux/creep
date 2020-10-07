import Head from 'next/head'
import Footer from './Footer'
import {SiteName} from './Layout'
import Header from './blog/Header'


export default function BlogLayout({ children, meta }) {
    return (
        <div className="bg-rich-black text-light-gray w-full h-full">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
                <title>{meta.title} | {SiteName}</title>
            </Head>

            <main>
                <div className="w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
                    {/* welcome container */}
                    <div className="text-white py-12 text-center">
                        <h1 className="text-2xl uppercase font-black tracking-wide">{SiteName}</h1>
                        <p className="text-lg italicfont-light tracking-wide">My simple blog diary...</p>
                    </div>
                    <hr />

                    <article>
                        <Header content={meta} />
                        {children}
                    </article>
                </div>

                <Footer />
            </main>
        </div>
    )
}