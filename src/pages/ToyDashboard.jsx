import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js'
import { Doughnut, PolarArea } from 'react-chartjs-2'
import { toyService } from '../services/toy.service'
import { useSelector } from 'react-redux'
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export function ToyDashboard() {
  const labels = toyService.getLabels()
  const toys = useSelector((state) => state.toyModule.toys)
  // console.log(toys)
  const toysLabelMap = toys.reduce((accumulator, toy) => {
    if (toy.labels && Array.isArray(toy.labels)) {
      toy.labels.forEach((label) => {
        // console.log('pos', labels.indexOf(label))
        accumulator[labels.indexOf(label)] =
          (accumulator[labels.indexOf(label)] || 0) + 1
      })
    }
    return accumulator
  }, [])

  console.log(toysLabelMap)

  const data = {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data: toysLabelMap,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 35, 147, 0.2)',
          'rgba(155, 255, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 35, 147, 1)',
          'rgba(155, 255, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <section style={{ maxWidth: '60vw', margin: 'auto' }}>
      <Doughnut data={data} />
      <PolarArea data={data} />
    </section>
  )
}
