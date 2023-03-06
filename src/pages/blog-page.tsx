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

/* Here is the explanation for the code below:
1. getStaticPropsは、ビルドプロセス中に呼び出される関数です。
2. getStaticPropsはサーバーサイドで実行されます。
3. getStaticPropsはビルド時に呼び出され、返されたpropsがページコンポーネントにpropsとして渡されます。
4. getStaticPropsはページからのみエクスポートできます。非ページファイルからはエクスポートできません。
5. getStaticPropsはページ内でしか使用できません。_app.jsや他のファイルでは使用できません。
6. getStaticPropsはgetStaticPathsと組み合わせて使用できます。
7. getStaticPropsはサーバーサイドでのみ実行されます。
8. getStaticPropsはビルド時に実行されます。
9. getStaticPropsを使用すると、ビルド時にデータを取得できます。
10. getStaticPropsは、公開APIエンドポイントからのみデータを取得できます。サーバーサイドやクライアントサイドにアクセスできません。
11. getStaticPropsはダイナミックルートと組み合わせて使用できます。
12. getStaticPropsは、CMS、API、データベース、ファイルシステムを含む任意のデータソースと組み合わせて使用できます。*/

export const getStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
