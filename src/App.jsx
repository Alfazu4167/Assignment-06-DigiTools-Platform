


import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Featured from './Components/Featured/Featured'

import Navbar from './Components/Navbar/Navbar'
import PremiumTools from './Components/PremiumTools/PremiumTools'
import Products from './Components/Products/Products'
import { ToastContainer } from 'react-toastify'
import StartedSection from './Components/StartedSection/StartedSection'
import PricingCardSection from './Components/PricingCardSection/PricingCardSection'
import Workflow from './Components/WorkflowSection/Workflow'
import Footer from './Components/Footer/Footer'

const fetchProducts = async () => {
  const res = await fetch("data.json")
  return res.json()
}



function App() {
  const productPromise = fetchProducts()

  return (
    <>
      <header className='max-w-11/12 mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <Featured></Featured>
      <PremiumTools></PremiumTools>
      <Suspense>
        <Products productPromise={productPromise}></Products>
      </Suspense>
      <StartedSection></StartedSection>
      <PricingCardSection></PricingCardSection>
      <Workflow></Workflow>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
