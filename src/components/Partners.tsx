
const Partners = () => {
  const partners = [
    "Landis+Gyr",
    "WSP Facility Management",
    "Kepco KPS (Korean)",
    "African Cables (Cbi)",
    "Yaetsho Investments",
    "Afrirent Holdings",
    "TSN Engineering",
    "Tshwane University of Technology",
    "Brymac",
    "Rumas",
    "GIZ – South African German Energy Programme",
    "Vintec (Israel)",
    "Amanzi Meters"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Key Strategic & Technology Partners</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <h3 className="text-sm font-semibold text-slate-700 leading-tight">{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
