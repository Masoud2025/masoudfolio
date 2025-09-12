'use client'
import Image from 'next/image'
import ImageOnCenter from '../../../public/ln-dem01.webp'

const CardCoverflow = () => {
  const baseClass =
    'rounded-[2rem] overflow-hidden hover:cursor-pointer hover:scale-105 transition-transform duration-500 relative'

  return (
    <div
      className="CardsAnimation flex absolute bottom-4 left-[-3em] top-[39em] 
      hover:top-[30em] transition-all duration-[5000ms] ease-in-out"
    >
      <div
        className={`${baseClass} bg-orange-300 w-[380px] h-[480px] rotate-[-20deg] ml-[-4em] left-[4em] top-[3em]`}
      >
        <Image alt="demo1" src={ImageOnCenter} fill style={{ objectFit: 'cover' }} />
      </div>

      <div
        className={`${baseClass} bg-pink-300 w-[428px] h-[480px] rotate-[-15deg] ml-[-4em] left-[5em] top-[-4em]`}
      >
        <Image alt="demo2" src={ImageOnCenter} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* center image */}
      <div
        className={`${baseClass} bg-green-300 w-[428px] h-[580px] left-[-3em] top-[-8em]`}
      >
        <Image alt="demo3" src={ImageOnCenter} fill style={{ objectFit: 'cover' }} />
      </div>

      <div
        className={`${baseClass} bg-blue-300 w-[428px] h-[480px] rotate-[10deg] ml-[-4em] left-[-4em] top-[-5em] z-[-8]`}
      >
        <Image alt="demo4" src={ImageOnCenter} fill style={{ objectFit: 'cover' }} />
      </div>

      <div
        className={`${baseClass} bg-yellow-200 w-[428px] h-[480px] rotate-[15deg] ml-[-4em] left-[-4em] top-[1em] z-[-9]`}
      >
        <Image alt="demo5" src={ImageOnCenter} fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  )
}

export default CardCoverflow
