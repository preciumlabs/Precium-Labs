import React from 'react'
import Teamimage from '../../assets/images/logo.png'

export default function Team() {
  return (
    <div className='w-[91%] 2xl:w-[1207px] mx-auto py-[96px]   ' >
    <h2 className='  f-f-sm text-white text-4xl lg:text-5xl font-medium text-center ' >ABOUT</h2>
<div className=' grid grid-cols-12  items-center xl:gap-[64px]  pt-[64px]   ' >
<div className=' col-span-12 xl:col-span-4 hidden xl:block    ' >
                  <img src={Teamimage} className=' w-[436px] h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 '  />
                </div>
                <div className=' col-span-12 xl:col-span-8    ' >
            
                  <h4 className=' f-f-r   leading-[41px] sm:leading-[50px]  text-base lg:text-xl  text-white  text-center xl:text-start  ' >At Precium Labs, we're a dynamic team of builders dedicated to transforming innovative ideas into functional blockchain solutions. We specialize in developing projects across a wide spectrum of blockchain networks, including Ethereum, Solana, TON, and various EVM and non-EVM chains. Our expertise spans from crafting Web3-powered utility products in our Lab to delivering insightful educational content on our blog. Whether you're envisioning a groundbreaking application or seeking to enhance your blockchain knowledge, Precium Labs is your partner in driving the future of decentralized technology.</h4>
                  </div>
                  <div className=' col-span-12 xl:col-span-4 xl:hidden mt-[64px]   ' >
                  <img src={Teamimage} className=' w-[343px] h-[343px] sm:w-[436px] sm:h-[436px] lg:w-[443px] lg:h-[433px] mx-auto xl:ml-0 '  />
                </div>
              </div>
    </div>
  )
}


 
