import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface Post {
  id: number
  slug: string
  title: string
  date: string
  summary: string
  body: string
  tags: string[]
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(r => r.json())
      .then((data: Post[]) => {
        const found = data.find(p => p.slug === slug)
        if (found) {
          setPost(found)
        } else {
          setNotFound(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  // Inject JSON-LD schema once post loads
  useEffect(() => {
    if (!post) return
    const existingScript = document.getElementById('blog-jsonld')
    if (existingScript) existingScript.remove()

    const script = document.createElement('script')
    script.id = 'blog-jsonld'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: 'E-BikeIns.com — Tomlinson & Co',
        url: 'https://e-bikeins.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'E-BikeIns.com',
        url: 'https://e-bikeins.com'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://e-bikeins.com/blog/${post.slug}`
      },
      keywords: post.tags.join(', ')
    })
    document.head.appendChild(script)

    // Update page title
    document.title = `${post.title} | E-BikeIns.com`

    return () => {
      const s = document.getElementById('blog-jsonld')
      if (s) s.remove()
    }
  }, [post])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>⚡ Florida's E-Bike Insurance Specialists</span>
          <a href="tel:800-616-1418" className="hover:text-green-200">📞 800-616-1418</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold text-slate-800 hover:text-green-700 transition">
              E-Bike<span className="text-green-600">Ins</span>.com
            </Link>
            <p className="text-xs text-slate-500">Florida E-Bike Coverage Specialists</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hidden sm:inline text-green-700 font-semibold hover:text-green-900 transition">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold text-sm transition">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {loading && (
        <div className="text-center text-gray-500 py-32">Loading…</div>
      )}

      {notFound && !loading && (
        <div className="text-center py-32">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-green-600 underline hover:text-green-800">← Back to Blog</Link>
        </div>
      )}

      {post && !loading && (
        <>
          {/* Back Link + Hero */}
          <section className="bg-slate-900 py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-green-400 hover:text-white text-sm font-semibold mb-5 transition">
                ← Back to Blog
              </Link>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-green-800 text-green-200 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">{post.title}</h1>
              <p className="text-slate-400 text-sm">
                {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                {' · '}E-BikeIns.com
              </p>
            </div>
          </section>

          {/* Post Body */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg prose-headings:text-slate-800 prose-a:text-green-600 prose-strong:text-slate-800 max-w-none text-gray-700 leading-relaxed
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_li]:text-gray-700
                  [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />

              {/* CTA Box */}
              <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Questions About Your E-Bike Insurance?</h3>
                <p className="text-slate-700 mb-4">Our Florida team specializes in e-bike coverage for all Class 1, 2, and 3 bikes. Get the right protection in minutes.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:800-616-1418"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition"
                  >
                    📞 Call 800-616-1418
                  </a>
                  <a
                    href="https://app.usecanopy.com/c/tomlinson-and-co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition"
                  >
                    ⚡ Get Free Quote →
                  </a>
                </div>
              </div>

              {/* Back to blog */}
              <div className="mt-8 text-center">
                <Link to="/blog" className="text-green-600 hover:text-green-800 font-semibold underline text-sm">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-white mb-2">⚡ Florida's E-Bike Insurance Specialists</p>
          <p className="text-sm">E-BikeIns.com • Florida E-Bike Coverage Specialists<br/>A Tomlinson &amp; Co Agency</p>
          <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson &amp; Co Inc. All rights reserved.</p>
          <p className="text-xs mt-2">
            <Link to="/" className="text-gray-400 hover:text-white underline mr-4">Home</Link>
            <Link to="/blog" className="text-gray-400 hover:text-white underline mr-4">Blog</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
