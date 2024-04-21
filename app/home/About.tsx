import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

export default function About() {
  const highlightClassName = 'font-bold text-default-primary'

  const services = [
    'Full-Stack Development',
    'Chrome Extensions Development',
    'Frontend Development',
    'Backend Development',
    'API Integrations',
  ]

  return (
    <Container className="-mt-20 bg-black">
      <div className="flex items-center gap-16">
        <div className="max-w-4xl">
          <h1 className="font-semibold">About Me</h1>
          <h2 className="my-2 text-4xl font-semibold">
            Problem <span className={highlightClassName}>Solver</span> For Your Digital
            <span className={highlightClassName}> Products</span>
          </h2>
          <div className="text-xl">
            <p className="my-4">
              Experienced Full-Stack Engineer with{' '}
              <span className={highlightClassName}>3+ years</span> of expertise in delivering
              cloud-based web technology solutions. My specialization spans both front-end and
              back-end development, and I have a track record of creating bespoke software solutions
              from scratch or customizing existing applications, that seamlessly scale to
              accommodate your evolving requirements.
            </p>
            <p>
              With a deep understanding and hands-on experience in a variety of programming
              languages and architectural patterns, and a strong grip on algorithms, I possess the
              proficiency needed to engineer scalable and cost-effective solutions for every unique
              project concept.
            </p>
          </div>
        </div>
        <div className="text-xl">
          {services.map((service, index) => (
            <div key={index} className="my-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center">
                <Image src="/static/images/dot.png" alt="dot" width={18} height={18} />
              </span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
