import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  // Sort posts in descending date order
  const sortedPosts = posts.sort((a, b) => {  
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  })

  return (
    <div>
      {!sortedPosts && <div>No posts!</div>}
      <ul>
        {sortedPosts &&
          sortedPosts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post.frontmatter.date}: {post.frontmatter.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
 
