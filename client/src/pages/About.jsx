import test1 from '../assets/images/a-propos1.jpg'
import test2 from '../assets/images/a-propos2.png'

export default function About() {
  return (
    <main className="flex flex-col items-center bg-fixed bg-bg-marbre bg-no-repeat bg-bottom bg-cover h-full bg-black bg-opacity-50 bg-blend-overlay text-white">
      <h2 className="border-l-4 border-gold-500 pl-2 font-bold text-3xl mt-10 text-white">
        À propos
      </h2>
      <article className="card border-2 border-gold-500 bg-black bg-opacity-50 bg-blend-overlay text-white w-[96%] shadow-xl lg:flex lg:flex-row lg:items-center mt-10 lg:w-2/3">
    <img
      src={test1}
      alt=""
      className='rounded-t-xl border-b-2 border-gold-500 lg:w-1/4 lg:rounded-tr-none lg:rounded-l-xl lg:border-b-0 lg:border-r-2' />
  <div className="card-body">
  <h3 className='text-xl mb-5 '>Lorem lorem</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima eum voluptas aspernatur nihil? Ipsum rerum voluptatibus maiores modi voluptates doloribus dolore vero nam culpa quia sit, error animi totam.</p>
  </div>
</article>
      <article className="card border-2 border-gold-500 bg-black bg-opacity-50 bg-blend-overlay text-white w-[96%] shadow-xl lg:flex lg:flex-row-reverse lg:items-center my-10 lg:w-2/3">
    <img
      src={test2}
      alt=""
      className='rounded-t-xl border-b-2 border-gold-500 lg:w-1/4 lg:rounded-tl-none lg:rounded-r-xl lg:border-b-0 lg:border-l-2' />
  <div className="card-body">
    <h3 className='text-xl mb-5'>Lorem lorem</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde alias odit repudiandae explicabo laudantium earum assumenda ea asperiores, doloremque sequi, voluptatem, sed eius reiciendis. Dolorum corporis quisquam at dolore?</p>
  </div>
</article>
    </main>
  );
}
