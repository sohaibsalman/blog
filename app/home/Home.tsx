import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import Main from './Main'
import Blogs from './Blogs'
import About from './About'
import Skills from './Skills'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Blogs />
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
