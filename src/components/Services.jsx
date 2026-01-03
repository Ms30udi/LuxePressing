import React from 'react';
import { FaClock, FaLeaf, FaTruck, FaStar, FaTint, FaTshirt, FaGem, FaShieldAlt } from 'react-icons/fa';

export default function LaundryServicesSection() {
  const services = [
    {
      title: "Lavage",
      description: "Notre service de lavage est une méthode pratique et abordable d'externaliser votre linge à des experts.",
      icon: <FaTint />,
    },
    {
      title: "Repassage",
      description: "Notre service de repassage à la vapeur assure un aspect final parfait à vos vêtements.",
      icon: <FaTshirt />,
    },
    {
      title: "Nettoyage à Sec",
      description: "Notre service de nettoyage à sec est un processus de lavage à base de solvant, qui utilise une chimie avancée.",
      icon: <FaGem />,
    },
    {
      title: "Ramassage & Livraison",
      description: "Nous tenons à fidéliser nos clients au maximum avec notre service de ramassage et de livraison.",
      icon: <FaTruck />,
    },
    {
      title: "Raccommodage",
      description: "Nous offrons à nos clients des services de raccommodage de base pour leurs vêtements sur une base sélective.",
      icon: <FaStar />,
    },
    {
      title: "Express",
      description: "Nous fournissons des services One-day lorsque vous avez besoin d'un nettoyage urgent.",
      icon: <FaClock />,
    },
    {
      title: "Produits Écologiques",
      description: "Nous utilisons des détergents écologiques et biodégradables pour protéger vos vêtements et l'environnement.",
      icon: <FaLeaf />,
    },
    {
      title: "Garantie Qualité",
      description: "Satisfaction garantie à 100%. Si vous n'êtes pas satisfait, nous relavons vos vêtements gratuitement.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div 
      className="py-20 bg-gray-50"
      style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="h-1 w-12 bg-teal-500 rounded-full mr-3" />
          <span className="text-teal-500 text-lg font-semibold uppercase tracking-wider">
            Nos Services
          </span>
          <div className="h-1 w-12 bg-teal-500 rounded-full ml-3" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          NOS SERVICES POUR LES
        </h2>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          PROFESSIONNELS ET LES PARTICULIERS
        </h3>
       <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Professionnels ou particuliers, Quick Laundry prend soin de votre linge pendant que vous profitez pleinement de votre temps.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Service key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  );
}

const Service = ({ title, description, icon, index }) => {
  return (
    <div
      className={`flex flex-col py-10 relative group/feature border-gray-200
        ${(index === 0 || index === 4) ? 'lg:border-l' : ''} 
        ${index < 4 ? 'lg:border-b' : ''} 
        lg:border-r
      `}
    >
      {/* Hover gradient effect - top for first row */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-teal-50 to-transparent pointer-events-none" />
      )}
      
      {/* Hover gradient effect - bottom for second row */}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-teal-50 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-teal-500 text-3xl">
        {icon}
      </div>
      
      {/* Title with animated bar */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};