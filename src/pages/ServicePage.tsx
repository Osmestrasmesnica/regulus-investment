import { TrendingUp, Shield, Users, DollarSign, BarChart3, FileText, Lightbulb, Globe } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment guidance for mining and mineral resource projects, from exploration to production.',
      features: [
        'Market analysis and due diligence',
        'Investment strategy development',
        'Portfolio optimization',
        'Performance monitoring and reporting',
      ],
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies to protect your mining investments.',
      features: [
        'Geological and technical risk evaluation',
        'Political and regulatory risk analysis',
        'Market and commodity price risk assessment',
        'Environmental and social risk management',
      ],
    },
    {
      icon: Users,
      title: 'M&A Consulting',
      description: 'Expert guidance through mergers, acquisitions, and strategic partnerships in the mining sector.',
      features: [
        'Target identification and evaluation',
        'Transaction structuring and negotiation',
        'Due diligence coordination',
        'Post-merger integration support',
      ],
    },
    {
      icon: DollarSign,
      title: 'Project Financing',
      description: 'Tailored financing solutions for mining operations and development projects.',
      features: [
        'Debt and equity financing arrangements',
        'Project finance structuring',
        'Lender and investor relations',
        'Financial modeling and projections',
      ],
    },
    {
      icon: BarChart3,
      title: 'Valuation Services',
      description: 'Professional asset valuation and financial modeling for mining properties and companies.',
      features: [
        'Resource and reserve valuation',
        'Company and asset appraisals',
        'Financial modeling and analysis',
        'Independent expert reports',
      ],
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory environments and ensure compliance across jurisdictions.',
      features: [
        'Regulatory framework analysis',
        'Compliance strategy development',
        'Permit and licensing support',
        'Government relations advisory',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Strategic Planning',
      description: 'Long-term strategic planning and business development for mining companies.',
      features: [
        'Corporate strategy development',
        'Business plan creation',
        'Market entry strategies',
        'Growth and expansion planning',
      ],
    },
    {
      icon: Globe,
      title: 'International Markets',
      description: 'Access global markets and international investment opportunities in mining.',
      features: [
        'Cross-border transaction support',
        'International market analysis',
        'Foreign investment facilitation',
        'Global partnership development',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial advisory services tailored specifically for the 
              mining and mineral resources industry.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your objectives, challenges, and opportunities.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">Comprehensive evaluation of market conditions and project fundamentals.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">Developing tailored solutions and strategic recommendations.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Implementation support and ongoing monitoring of results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in various segments of the mining and mineral resources sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Precious metals"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precious Metals</h3>
              <p className="text-gray-600">Gold, silver, platinum, and other precious metal mining operations.</p>
            </div>

            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Base metals"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Base Metals</h3>
              <p className="text-gray-600">Copper, zinc, lead, nickel, and other industrial metal projects.</p>
            </div>

            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Energy minerals"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Minerals</h3>
              <p className="text-gray-600">Coal, uranium, lithium, and other energy-related mineral resources.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
