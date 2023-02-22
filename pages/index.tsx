import { FC } from 'react'
import HomeTemplate from '../src/components/templates/Home'
import Page from '../src/components/templates/Page'
import style from '../styles/index.module.css'

type Home = {}

const Home: FC<Home> = ({}) => {
  return (
    <Page>
      <HomeTemplate />
    </Page>
  )
}

export default Home

// export async function getStaticProps() {

//   const url = await getChecksUrl()

//   const res = await fetch(url)
//   const data = await res.json()

//   const products = data.map((item: ICheck) => {
//     return item.ticket.document.receipt.items.map((it) => {
//       it.price = it.price / 100
//       it.sum = it.sum / 100
//       it.date = item.ticket.document.receipt.dateTime
//       return it
//     })
//   }).flat()

//   return {
//     props: {data, products}, // will be passed to the page component as props
//   }
// }
