export const fetchContent = (articleId: string) => {
  switch (articleId) {
    case 'my-first-post':
      return '初投稿です！これからよろしくお願いします。'

    case 'my-second-post':
      return 'SSG を勉強中！'

    case 'my-third-post':
      return 'Next.js は楽しい！'
  }
}
