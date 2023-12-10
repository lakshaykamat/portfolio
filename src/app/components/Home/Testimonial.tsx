import Image from "next/image";

const Testimonials = ({ testimonials }) => {

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-200">Testimonials</h2>
        <div className="flex flex-col gap-3 px-4 justify-evenly lg:flex-row">
          {testimonials.map((testimonial: { id: number, name: string, image: string, auother: string, quote: string }) => (
            <TestimonialCard key={testimonial.id} name={testimonial.name} quote={testimonial.quote} auother={testimonial.auother} image={testimonial.image} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TestimonialCard = ({ name, quote, image, auother }) => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="flex flex-col items-stretch min-h-full p-6 bg-gray-900 rounded shadow">
        <p className="flex-1 mb-4 font-semibold text-gray-300">{quote}</p>
        <div className="flex items-center">
          <Image src={image} alt="client" width={40} height={40} className="rounded-[50%]" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-300">{name}</h3>
            <p className="text-gray-400">{auother}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;