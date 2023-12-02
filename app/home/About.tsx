import React from 'react'

export default function About() {
  const highlightClassName = 'font-bold text-primary-100'

  return (
    <div className="-mt-20 bg-black px-16 py-28">
      <h1 className="text-4xl font-semibold text-primary-100">About Me</h1>
      <div className="text-xl">
        <p className="my-4">
          Experienced Full-Stack Engineer with <span className={highlightClassName}>3+ years</span>{' '}
          of expertise in delivering cloud-based web technology solutions. My specialization spans
          both front-end and back-end development, and I have a track record of creating bespoke
          software solutions from scratch that seamlessly scale to accommodate your evolving
          requirements.
        </p>
        <p>
          With a deep understanding and hands-on experience in a variety of programming languages
          and architectural patterns, including <span className={highlightClassName}>MVC</span>{' '}
          and&nbsp;
          <span className={highlightClassName}>Microservices</span>, I possess the proficiency
          needed to engineer scalable and cost-effective solutions for every unique project concept.
        </p>
      </div>
      <div className="mt-12 flex justify-center text-center text-4xl">
        <p className="w-[80%]">
          I love to <span className={highlightClassName}>provide</span> and implement elegant{' '}
          <span className={highlightClassName}>software solutions</span> for complex{' '}
          <span className={highlightClassName}>business problems</span>
        </p>
      </div>
    </div>
  )
}
