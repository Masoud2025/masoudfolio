'use client'

const CircleText = () => {
  return (
    <div className='flex items-center justify-center min-h-screen relative top-[-15em] z-50 '>
      <div className='relative w-80 h-80 flex items-center justify-center'>
        {/* متن وسط */}
        <h1 className='text-center text-2xl font-bold text-white'>
          Welcome to my <br /> portfolio
        </h1>

        {/* متن دایره‌ای */}
        <svg
          viewBox='0 0 300 300'
          className='absolute w-full h-full animate-spin-slow'
        >
          <defs>
            <path
              id='circlePath'
              d='M 150, 150
                 m -120, 0
                 a 120,120 0 1,1 240,0
                 a 120,120 0 1,1 -240,0'
            />
          </defs>
          <text
            fill='#fbbf24'
            fontSize='18'
            fontWeight='bold'
            letterSpacing='4px'
          >
            <textPath href='#circlePath'>
              • Masoud Jafari — Software Engineer • Masoud Jafari — Software
              Engineer
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}

export default CircleText
