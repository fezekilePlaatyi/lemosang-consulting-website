const Partners = () => {
  const partners = [
    { name: "Landis+Gyr", link: "https://www.landisgyr.com" },
    { name: "WSP Facility Management", link: "https://www.wsp.com" },
    { name: "Kepco KPS (Korean)", link: "https://www.kps.co.kr/eng/index.do" },
    { name: "African Cables (Cbi)", link: "https://www.africancables.com/" },
    { name: "Yaetsho Investments", link: "https://www.yaetsho.com/" },
    { name: "Afrirent Holdings", link: "https://www.afrirentholdings.co.za/" },
    { name: "TSN Engineering", link: "https://example.com/tsn" },
    { name: "Tshwane University of Technology", link: "https://www.tut.ac.za" },
    { name: "Brymac", link: "https://brymac.co.za/" },
    { name: "Rumas", link: "https://rumas.co.za/" },
    { name: "GIZ – South African German Energy Programme", link: "https://www.giz.de" },
    { name: "Vintec (Israel)", link: "https://www.vintec.com/" },
    { name: "Amanzi Meters", link: "https://www.asantemaji.com/" },
    { name: "City Power", link: "https://www.citypower.co.za" },
    { name: "Izando Construction", link: "https://www.izandoconstruction.co.za/" },
    { name: "ChromeCo", link: "https://www.chromeco.sa/" },
    { name: "Eskom", link: "https://www.eskom.co.za" },
    { name: "Financial Intelligence Centre", link: "https://www.fic.gov.za" },
    { name: "Techsitter", link: "https://techsitter.io/" },
    { name: "Byrnes Associates", link: "https://www.byrnesandassociatesinc.com/" },
    { name: "Soosan Industries", link: "http://eng.soosanind.co.kr/main/index.html" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Key Strategic & Technology Partners
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300 border border-slate-200 block"
            >
              <h3 className="text-sm font-semibold text-slate-700 leading-tight">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
