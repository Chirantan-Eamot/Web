import Banner from '@/components/dgms/banner'
import { Features } from '@/components/dgms/Features'
import { Result } from '@/components/dgms/result'
import Footer from '@/components/footers/footer'
import Header from '@/components/headers/Header'
import React from 'react'


export default function DGMS () {
  return (
    <>
    <div id="wrapper">
    <div id="page" className="">
    <Header/>
    <Banner/>
    <Result/>
    <Features/>
    <Footer/>


 
    </div>
    </div>
    </>
  )
}
