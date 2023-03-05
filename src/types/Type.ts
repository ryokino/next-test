// https://jsonplaceholder.typicode.com/　の型を準備する
export interface POST {
  userId: number
  id: number
  title: string
  body: string
}

export interface COMMENT {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

// TASK のinterfaceを定義する
export interface TASK {
  userId: number
  id: number
  title: string
  completed: boolean
}
