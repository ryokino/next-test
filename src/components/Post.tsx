import { POST } from '@/types/Type'
import Link from 'next/link'

// This is a component to display the title of a post
const Post = (props: POST) => {
  const { id, title } = props
  return (
    <div>
      <div className="flex">
        <div>{id} : </div>

        <div className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
          <Link href={`/posts/${id}`}>{title}</Link>
        </div>
      </div>
    </div>
  )
}

export default Post
