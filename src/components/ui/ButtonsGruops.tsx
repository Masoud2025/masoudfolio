'use client'

const IntroButtons = () => {
  return (
    <div
      className='
        fixed inset-0
        flex items-center justify-center
        pointer-events-none font-[Lalezar]
        w-full h-full
      '
    >
      <link
        href='https://fonts.googleapis.com/css2?family=Lalezar&display=swap'
        rel='stylesheet'
      />

      <div
        className='
          flex flex-col items-center justify-center gap-2
          rounded-3xl px-16 py-10
          text-gray-100 font-bold text-3xl
          select-none
          cursor-pointer
        '
      >
        <h1 className='text-center text-6xl md:text-8xl text-black'>
          مســـــــــــــــــــعودجعــــــــــــــــــــــفری توســــــــــــعه
          دهنده وبــــــــــــــــ
          بـــــــــــــــــــرنــــــــــــــــــامــــــــــــــــــــه
          نـــــــــــــــــــویـــــــــــس
          ۲۰ســـــــــــــــــــــــــــــــــــــــالــــــــــــــــــــــــه
        </h1>
        <h1>
          <pre>
            خـــــــــــــــــــــــــــــــــوشـــــــــــــــــــــــــــــــــگل
          </pre>
        </h1>
        <p className='text-black text-xl md:text-2xl'>
          «به امید روزی که هنر و علم در کنار هم بدرخشد»
        </p>
      </div>
    </div>
  )
}

export default IntroButtons
