import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="mt-10 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          My <span className="text-primary-50">Projects</span>
        </h1>

        <p className="text-xl">
          I love to develop things that run over the internet. I am in a quest of keeping myself up
          to date according to the new technologies and platforms, and for that I love to read tech
          articles, do certifications and get my hands dirty by working on simple ideas of my own.
          Here are some ideas that I have brought to life!
        </p>
      </div>
      <div className="py-8">
        <div className="flex flex-1 flex-wrap justify-center">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              tags={d.tags}
            />
          ))}
        </div>
      </div>
    </>
  )
}
