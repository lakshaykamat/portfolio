import Image from "next/image";

const Testimonials = ({ testimonials }) => {

  return (
      <div className="pb-10 mx-auto lg:px-20">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-200">Testimonials</h2>
        <div className="flex flex-col gap-12 justify-evenly lg:flex-row">
          {testimonials.map((testimonial: { id: number, name: string, image: string, auother: string, quote: string }) => (
            <TestimonialCard key={testimonial.id} name={testimonial.name} quote={testimonial.quote} auother={testimonial.auother} image={testimonial.image} />
          ))}
        </div>
      </div>
  );
};


const TestimonialCard = ({ name, quote, image, auother }) => {
  return (
    <div className="w-full rounded lg:w-1/3 outline outline-zinc-700 outline-1">
      <div className="flex flex-col items-stretch min-h-full p-6 rounded drop-shadow-2xl bg-slate-800">
        <p className="flex-1 mb-4 font-semibold text-zinc-300">{quote}</p>
        <div className="flex items-center">
          <Image src={image} alt="client" width={40} height={40} className="rounded-[50%]" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-zinc-300">{name}</h3>
            <h4 className="text-zinc-400">{auother}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;