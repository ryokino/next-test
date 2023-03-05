// サーバーサイドで実施される具体的な処理を記述する
// このファイルは、サーバーサイドで実行されるため、
// ブラウザで実行されるコードは記述できない
// https://jsonplaceholder.typicode.com/
// のPosts, Task, Commentsのデータ
// から10件分のデータをfetchしてくる

// import fetch from 'node-fetch'

export const getAllPostsData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await res.json()
  return posts
}

export const getAllTaskData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  )
  const tasks = await res.json()
  return tasks
}

// 得られたデータを元に getStaticPathsを実行したいので、受け取りやすい形に変形する。
export const getAllPostIds = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await res.json()
  return posts.map((post: { id: string }) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id: string) => {
  const res = await fetch(
    new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
  )
  const post = await res.json()
  return {
    post,
  }
}
