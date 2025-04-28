import Main from './Main'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Experience />
      {/* <Blogs /> */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
