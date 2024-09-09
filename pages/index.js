import Head from '@components/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple Next.js Page</title>
        <meta name="description" content="A simple web page using Next.js" />
      </Head>

      <main>
        <h1>Welcome to My Simple Next.js Page</h1>
        <p>This is a simple web page created as an example using Next.js.</p>
      </main>

      <footer>
        <p>&copy; 2023 My Simple Next.js Page</p>
      </footer>
    </div>
  )
}
