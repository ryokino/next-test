import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getAllPostsData } from '@/lib/fetch'
import { POST } from '@/types/Type'

interface STATICPROSP {
  posts: POST[]
}

const BlogPage = ({ posts }: STATICPROSP) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">Blog Page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

// getStaticPropsを実装する
export const getStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
