const Partners = () => {
  const partners = [
    { name: "Landis+Gyr", link: "https://www.landisgyr.com", logo: "/lemosang-uploads/logos/Picture1.png" },
    { name: "WSP Facility Management", link: "https://www.wsp.com", logo: "/lemosang-uploads/logos/Picture2.png" },
    { name: "Kepco KPS (Korean)", link: "https://www.kps.co.kr/eng/index.do", logo: "/lemosang-uploads/logos/Picture3.png" },
    { name: "African Cables (Cbi)", link: "https://www.africancables.com/", logo: "/lemosang-uploads/logos/Picture4.png" },
    { name: "Yaetsho Investments", link: "https://www.yaetsho.com/", logo: "/lemosang-uploads/logos/Picture5.png" },
    { name: "Afrirent Holdings", link: "https://www.afrirentholdings.co.za/", logo: "/lemosang-uploads/logos/Picture6.png" },
    // { name: "TSN Engineering", link: "https://example.com/tsn" },
    { name: "Tshwane University of Technology", link: "https://www.tut.ac.za", logo: "/lemosang-uploads/logos/Picture7.png" },
    { name: "Brymac", link: "https://brymac.co.za/", logo: "/lemosang-uploads/logos/Picture8.png" },
    { name: "Rumas", link: "https://rumas.co.za/", logo: "/lemosang-uploads/logos/Picture9.png" },
    { name: "GIZ – South African German Energy Programme", link: "https://www.giz.de", logo: "/lemosang-uploads/logos/Picture10.png" },
    { name: "Vintec (Israel)", link: "https://www.vintec.com/", logo: "/lemosang-uploads/logos/Picture11.png" },
    { name: "Amanzi Meters", link: "https://www.asantemaji.com/", logo: "/lemosang-uploads/logos/Picture12.png" },
    { name: "City Power", link: "https://www.citypower.co.za", logo: "/lemosang-uploads/logos/Picture13.png" },
    { name: "Izando Construction", link: "https://www.izandoconstruction.co.za/", logo: "/lemosang-uploads/logos/Picture14.png" },
    { name: "ChromeCo", link: "https://www.chromeco.sa/", logo: "/lemosang-uploads/logos/Picture18.jpg" },
    { name: "Eskom", link: "https://www.eskom.co.za", logo: "/lemosang-uploads/logos/Picture15.png" },
    { name: "Financial Intelligence Centre", link: "https://www.fic.gov.za", logo: "/lemosang-uploads/logos/Picture16.png" },
    { name: "Techsitter", link: "https://techsitter.io/", logo: "/lemosang-uploads/logos/Picture17.png" },
    // { name: "Byrnes Associates", link: "https://www.byrnesandassociatesinc.com/" },
    { name: "Soosan Industries", link: "http://eng.soosanind.co.kr/main/index.html", logo: "/lemosang-uploads/logos/Picture19.png" },
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
              title={partner.name}
              className="bg-slate-50 p-6 rounded-lg flex justify-center items-center h-32 hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
