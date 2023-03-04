// POSTの内容を表示するコンポーネント

import Layout from '@/components/Layout'
import { POST } from '@/types/Type'
import Link from 'next/link'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostIds, getPostData } from '@/lib/fetch'

const PostDetail = (props: POST) => {
  const { id, title, body } = props
  return (
    <Layout title={title}>
      <p className="m-4">
        {'ID : '}
        {id}
      </p>
      <p className="mb-4 text-xl font-bold">{title}</p>
      <p className="mx-10 mb-12">{body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <ChevronDoubleLeftIcon className="h-6 w-6 mr-3" />
          <a data-testId="back-blog">Back to blog-page</a>
        </div>
      </Link>
    </Layout>
  )
}

export default PostDetail

// getStaticPathsを実装する
// getStaticPathsは、事前ビルドするページのパスを指定する
// 今回は、事前ビルドしたいページが複数あるので、pathsに配列で指定する
// getStaticPathsはサーバーサイドで実行される

export const getStaticPaths: GetStaticPaths = async () => {
  // 事前ビルドしたいページのidを取得する
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// getStaticPropsを実装する
// getStaticPropsは、ビルド時に実行される
// ビルド時に実行されるので、外部APIからデータを取得することができる
// 今回は、idを受け取り、そのidに紐づくデータを取得する
// getStaticPropsはサーバーサイドで実行される

export const getStaticProps: GetStaticProps = async (context) => {
  const { post: post } = await getPostData(context.params?.id as string)

  return {
    props: {
      ...post,
    },
  }
}
