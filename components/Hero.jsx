import Button from "./Button"

const Hero = () => {
  return (
    <section className='w-full h-screen flex_center flex-col select-none gap-20'>
        <h1 className="heading_1">Line Game</h1>
        <Button link={'/select'}>
          Start
        </Button>
    </section>
  )
}

export default Hero