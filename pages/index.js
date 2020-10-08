import Head from 'next/head'
import Layout, {SiteName} from '../components/Layout'
import Footer from '../components/Footer'
import { posts } from '../getAllPosts'
import Blog from '../components/_BlogContainer'

function Home() {
    return (
        <Layout>
            <Head>
                <title>Welcome to {SiteName}</title>
            </Head>

            {/* welcome container */}
            <div className="text-white py-12 text-center">
                <h1 className="text-2xl uppercase font-black tracking-wide">{SiteName}</h1>
                <p className="text-lg italicfont-light tracking-wide">My simple blog diary...</p>
            </div>

            {/* sample posts container */}
            <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
                {posts.sort((a,b) => new Date(b.module.meta.date) - new Date(a.module.meta.date)).map((post) => (
                    <Blog key={post.link} post={post} />
                ))}
                {/* <div className="bg-magnolia py-4 px-6 rounded-md my-1">
                    <h1 className="text-3xl font-black tracking-wider text-venetian-red">Hello World</h1>
                    <small className="opacity-75 font-light italic">Posted on: <span className="font-bold">August 18, 2020</span></small>
                    <p className="mt-1 font-light tracking-wide text-sonic-silver truncate">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deserunt sit a, deleniti fuga esse quos numquam accusantium commodi eveniet.</p>
                    <button className="bg-rich-black rounded-md opacity-75 hover:opacity-100 transition-colors duration-500 font-light text-white tracking-wide mt-2 py-1 px-4 text-sm">Read More</button>
                </div> */}
            </div>

            {/* footer container */}
            <Footer />
        </Layout>
    )
}

export default Home