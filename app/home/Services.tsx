import React from 'react'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Divider from '@/components/Divider'
import servicesData from '@/data/servicesData'

export default function Services() {
  return (
    <Container className="bg-black">
      <>
        <Heading text="My Services" />
        {servicesData.map((service, index) => (
          <div key={service.url}>
            <div className="mt-10 flex items-center gap-14">
              <h3 className="text-2xl">{service.title}</h3>
              <p className="text-xl">{service.description}</p>
              <div className="rounded-full bg-default-gray-dark p-14"></div>
            </div>
            {servicesData.length - 1 > index && <Divider />}
          </div>
        ))}
      </>
    </Container>
  )
}
