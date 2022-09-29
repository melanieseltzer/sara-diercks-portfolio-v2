export default function Index({ posts }) {
  console.log(posts)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export async function getStaticProps() {
  // const posts = (await getAllPostsForHome()) || []

  return {
    props: { posts: {} },
  }
}
