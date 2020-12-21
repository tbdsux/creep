import Head from 'next/head'
import Layout, { SiteName } from '../components/Layout'
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
        <h1 className="text-2xl uppercase font-black tracking-wide">
          {SiteName}
        </h1>
        <p className="text-lg italicfont-light tracking-wide">
          My simple blog diary...
        </p>
      </div>

      {/* sample posts container */}
      <div className="w-5/6 md:w-2/3 lg:w-3/4 xl:w-2/3 lg:grid grid-cols-2 gap-4 mx-auto">
        {posts
          .sort(
            (a, b) =>
              new Date(b.module.meta.date) - new Date(a.module.meta.date),
          )
          .map((post) => (
            <Blog key={post.link} post={post} />
          ))}
      </div>

      {/* footer container */}
      <Footer />
    </Layout>
  )
}

export default Home
