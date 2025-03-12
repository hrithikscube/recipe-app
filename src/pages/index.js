import Head from 'next/head';
import Input from '@/components/Input';
import React, { useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondayButton from '@/components/SecondaryButton';

const initial_states = {
  search: ''
}

const Root = () => {

  const [params, setParams] = useState(initial_states)

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value
    })
  }

  return (
    <div>

      <Head>
        <title>Pinch of Yum - A food blog with simple and tasty recipes</title>
      </Head>

      <div className='flex flex-col lg:py-6 py-4 w-full text-center'>

        <h2 className='font-sans lg:text-lg md:text-base text-sm font-bold text-[#1a1a1a] uppercase tracking-wider'>Simple Recipes made for
          <br className='lg:hidden block' />
          <span className='text-[#743060] font-serif font-light lowercase tracking-normal'> real. actual. everyday life</span></h2>

      </div>

      <div className='flex flex-col w-full bg-[#f0f0f0] lg:py-10 py-8 lg:px-0 md:px-6 px-4 lg:gap-10 gap-8'>

        <div className='grid lg:grid-cols-4 lg:gap-5 gap-8 grid-cols-1 lg:w-10/12 w-full mx-auto'>

          {
            React.Children.toArray(
              [...Array(4)].map(item => (
                <div className='flex flex-col w-full lg:h-96 h-72 relative bg-slate-400 shadow hover:opacity-70 cursor-pointer'>

                  <div className='w-full h-10 absolute -bottom-5 left-0 flex items-center justify-center'>

                    <span className='text-white py-2 px-5 w-fit bg-amber-400 uppercase text-sm tracking-wider'>Name</span>
                  </div>
                </div>
              ))
            )
          }

        </div>

        <div className='flex flex-row md:gap-6 gap-5 lg:w-10/12 w-full mx-auto overflow-x-auto lg:pb-6 pb-4'>

          {
            React.Children.toArray(
              [...Array(10)].map(item => (
                <div className='flex flex-col gap-2 text-center items-center justify-center'>

                  <div className='lg:w-28 w-24 lg:h-28 h-24 rounded-full bg-slate-400' />

                  <p className='lg:text-base text-sm uppercase text-[#1a1a1a] font-bold tracking-wider'>Category</p>

                </div>
              ))
            )
          }


        </div>

        <div className='flex lg:flex-row flex-col lg:gap-5 gap-4 items-center justify-center lg:w-10/12 w-full mx-auto'>
          <Input
            name="search"
            value={params?.search}
            handleChange={handleChange}
            label="Search our recipes"
            width="lg:w-4/12 w-full"
          />
          <PrimaryButton label="View All Recipes" width={"lg:w-fit w-full"} />
        </div>

      </div>

      <div className='flex flex-col lg:w-10/12 w-full mx-auto lg:px-0 md:px-6 px-4'>

        <div className='flex lg:flex-row flex-col-reverse w-full lg:gap-6 gap-4 lg:py-6 py-4'>

          <div className='lg:w-8/12 w-full flex flex-col'>

            <div className='lg:pb-6 pb-4'>
              <h2 className='lg:text-lg md:text-base text-sm text-[#743060] uppercase font-bold tracking-wider'>The Latest & Greatest</h2>
            </div>

            {
              React.Children.toArray(
                [...Array(4)].map(item => (
                  <div className='flex md:flex-row flex-col items-start lg:gap-6 gap-4 lg:py-6 py-4 border-b border-[#cccccc]'>

                    <div className='md:w-fit w-full'>
                      <div className='md:w-52 w-full h-36 md:h-52 bg-slate-400' />
                    </div>

                    <div className='flex flex-col h-52 justify-between'>

                      <p className='lg:text-sm md:text-sm text-xs text-[#4d4d4d] uppercase font-semibold tracking-wider'>March 11, 2025</p>

                      <p className='lg:text-2xl md:text-xl text-base font-serif font-semibold text-[#1a1a1a]'>Whipped Feta Spread</p>

                      <p className='lg:text-base md:text-base text-sm text-[#1a1a1a]'>Just like the one from Trader Joe’s! I love this topped on bowls, as a dip for naan or flatbread, or in a sandwich. It’s SO good.</p>

                      <SecondayButton label="Continue Reading" />

                    </div>

                  </div>
                ))
              )
            }

            <div className='lg:pt-6 pt-4 lg:w-fit w-full lg:mx-auto'>
              <PrimaryButton label="View More Recent Posts" width="lg:w-fit mx-auto w-full" />
            </div>

          </div>

          <div className='lg:w-4/12 w-full flex flex-col lg:gap-6 gap-4'>


            <div className='grid grid-cols-2 gap-1'>

              <div className='w-full h-32 lg:h-48 bg-slate-400' />
              <div className='w-full h-32 lg:h-48 bg-slate-400' />

            </div>

            <div className='w-full h-32 lg:h-48 bg-slate-400' />

            <div className='grid grid-cols-2 gap-1'>

              <div className='w-full h-32 lg:h-48 bg-slate-400' />
              <div className='w-full h-32 lg:h-48 bg-slate-400' />

            </div>


          </div>

        </div>

      </div>

      <div className='flex flex-col lg:w-10/12 w-full mx-auto lg:px-0 md:px-6 px-4'>

        <div className='grid lg:grid-cols-3 lg:gap-4 gap-2 w-full'>

          {
            [...Array(3)].map(item => (
              <div className='flex flex-col bg-slate-200 lg:h-[450px] h-96' />
            ))
          }
        </div>

      </div>

      <div className='w-full h-40 bg-[#743060]' />


    </div>
  )
}

export default Root