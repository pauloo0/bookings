import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Service } from './servicesSlice'

const ServicesList: React.FC = () => {
  const services: Service[] = useAppSelector((state) => state.services.services)

  const renderedServices = services.map((service) => (
    <li key={service.id}>{service.name}</li>
  ))

  return (
    <div>
      <h2>Services</h2>
      <ul>{renderedServices}</ul>
    </div>
  )
}

export default ServicesList
