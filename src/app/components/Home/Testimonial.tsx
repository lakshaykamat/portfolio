import Image from "next/image";

const Testimonials = ({testimonials}) => {

    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center">Testimonials</h2>
          <div className="flex flex-wrap justify-evenly">
            {testimonials.map((testimonial: { id:number,name:string,image:string,auother:string,quote:string}) => (
              <div key={testimonial.id} className="w-full px-4 mb-8 lg:w-1/3">
                <div className="p-6 bg-white rounded shadow">
                  <p className="mb-4 text-gray-600">{testimonial.quote}</p>
                  <div className="flex items-center">
                      <Image src={testimonial.image} alt="client" width={40} height={40} className="rounded-[50%]"/>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.auother}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  