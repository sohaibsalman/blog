import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import Main from './Main'
import Blogs from './Blogs'

export default function Home() {
  return (
    <>
      <Main />
      <Blogs />
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
