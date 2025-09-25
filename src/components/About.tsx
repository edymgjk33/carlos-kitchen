const About = () => {
  return (
    <section id="about" className="section-premium bg-premium-white">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-premium-black">About Carlos Catering Equipment</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-premium-gray-dark mb-6 font-light leading-relaxed">
                At Carlos Catering Equipment, we provide premium catering tools and appliances 
                designed for restaurants, hotels, and professional kitchens across the UK.
              </p>
              <p className="text-lg text-premium-gray-dark mb-6 font-light leading-relaxed">
                Our mission is to combine quality with affordability while maintaining a clean 
                and modern aesthetic in everything we deliver. We understand that your kitchen 
                is the heart of your business, and we're committed to providing equipment that 
                performs reliably under the most demanding conditions.
              </p>
              <p className="text-lg text-premium-gray-dark font-light leading-relaxed">
                With decades of experience in the catering industry, we've built lasting 
                relationships with suppliers and customers alike, ensuring that every piece 
                of equipment we provide meets our exacting standards.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 border-premium-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-premium-black">Quality Assurance</h3>
                <p className="text-premium-gray-dark font-light">
                  Every product undergoes rigorous testing to ensure it meets professional standards.
                </p>
              </div>
              
              <div className="border-l-4 border-premium-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-premium-black">UK-Wide Delivery</h3>
                <p className="text-premium-gray-dark font-light">
                  Fast and reliable delivery across all regions of the United Kingdom.
                </p>
              </div>
              
              <div className="border-l-4 border-premium-black pl-6">
                <h3 className="text-xl font-bold mb-2 text-premium-black">Expert Support</h3>
                <p className="text-premium-gray-dark font-light">
                  Our experienced team provides ongoing support and maintenance guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;