import React from 'react'
import Button from './Button';

const HeroTagline = () => {
return (
    <section className="flex items-center justify-between px-10 py-20 font-sora h-full w-full">
      <div className="w-full">
        <h1 className="text-8xl  leading-[7.5rem] font-semibold">Create and Sell Custom Products</h1>
        <ul className="my-4 text-[1.6rem] font-sora mt-9">
          <li className='mt-3'>✅ 100% Free to use</li>
          <li className='mt-3'>✅ 900+ High-Quality Products</li>
          <li className='mt-3'>✅ Largest global print network</li>
        </ul>
        <div className='w-[23%] mt-9'>
        <Button
              bg="bg-[#6C5DD4]"
              paddingY="py-[1.25rem]"
              paddingX="px-[1.35rem]"
              text="text-2xl"
              font="font-bold"
              color="text-white"
              content="Start for free"
            />
        </div>
        <h2 className="text-[#6C5DD4] mt-8 tag">Trusted by over 8M sellers around the world</h2>
      </div>
    </section>
  );
}

export default HeroTagline