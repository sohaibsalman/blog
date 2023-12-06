'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Divider from '@/components/Divider'
import servicesData from '@/data/servicesData'
import Button from '@/components/Button'

export default function Services() {
  const router = useRouter()
  return (
    <Container className="bg-black">
      <>
        <Heading text="My Services" />
        {servicesData.map((service, index) => (
          <div key={service.url}>
            <div className="group mt-10 flex items-center gap-14 hover:cursor-pointer">
              <h3 className="min-w-[150px] text-2xl font-semibold uppercase transition-all duration-300 group-hover:text-primary-50">
                {service.title}
              </h3>
              <p className="text-lg text-gray-300">{service.description}</p>
              <div
                className="-rotate-[30deg] rounded-full bg-default-gray-dark p-8 text-3xl font-extrabold 
                transition-all duration-300 group-hover:bg-primary-50 group-hover:text-default-gray-dark"
              >
                &rarr;
              </div>
            </div>
            {servicesData.length - 1 > index && <Divider />}
          </div>
        ))}
        <div className="mt-14 flex justify-center">
          <Button text="Explore my Projects" onClick={() => router.push('/projects')} />
        </div>
      </>
    </Container>
  )
}
