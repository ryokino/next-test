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
      <div className="text-5xl font-bold mb-10 text-center mt-20">ブログ</div>
      <div className="text-2xl font-bold mb-5 text-center mt-10">
        ID: {postId}
      </div>
      <div className="text-xl font-bold mb-5 text-center mt-10">{post}</div>
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
