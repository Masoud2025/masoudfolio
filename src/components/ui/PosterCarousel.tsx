const CardCoverflow = () => {
  return (
    <div
      className='CardsAnimation flex absolute bottom-4 left-[4em] top-[39em] 
     hover:top-[30em] transition-all duration-[5000ms] ease-in-out'
    >
      <div className='bg-orange-300 rounded-4xl w-[428px] h-[480px] rotate-[-8deg] ml-[-4em]'>
        first Card on the left
      </div>
      <div className='bg-pink-300 rounded-4xl w-[428px] h-[480px] rotate-[-10deg] ml-[-4em]'>
        Second Card on the left
      </div>
      <div className='bg-green-300 rounded-4xl w-[428px] h-[580px]'>
        Center Card
      </div>
      <div className='bg-blue-300 rounded-4xl w-[428px] h-[480px] rotate-[8deg] ml-[-4em]'>
        Third Card on the left
      </div>
      <div className='bg-yellow-200 rounded-4xl w-[428px] h-[480px] rotate-[8deg] ml-[-4em]'>
        Froth Card on the left
      </div>
    </div>
  )
}
export default CardCoverflow
