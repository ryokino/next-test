import { fetchContent } from '@/lib/fetchDemo'
import { GetStaticPaths, GetStaticProps } from 'next'

interface PROPS {
  postId: string
  post: string
}

const PostDemoDetail = (props: PROPS) => {
  const { postId, post } = props
  return (
    <>
      <h1>ブログ</h1>
      <h2>ID: {postId}</h2>
      <h3>{post}</h3>
    </>
  )
}

export default PostDemoDetail

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params?.id as string
  const post = fetchContent(postId)

  return {
    props: {
      postId,
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'my-first-post',
        },
      },
      {
        params: {
          id: 'my-second-post',
        },
      },
      {
        params: {
          id: 'my-third-post',
        },
      },
    ],
    fallback: false,
  }
}
