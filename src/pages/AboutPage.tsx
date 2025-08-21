import { Users, MapPin, Award, Target, Linkedin, Brain, Cpu, Zap, BarChart } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'With over 20 years in mining finance, Ahmed has led transactions worth over $2B across the Middle East and Africa. Former VP at Goldman Sachs, specializing in natural resources.',
      achievements: ['20+ years mining finance', '$2B+ transactions led', 'Former Goldman Sachs VP'],
    },
    {
      name: 'Sarah Mitchell',
      position: 'Head of Investment Advisory',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Sarah brings 15 years of investment banking experience from London and Dubai. Expert in precious metals markets with a track record of successful IPOs and M&A deals.',
      achievements: ['15+ years investment banking', 'Precious metals expert', 'Multiple successful IPOs'],
    },
    {
      name: 'Dr. Hassan Al-Mahmoud',
      position: 'Senior Mining Analyst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'PhD in Geology from Imperial College London. Hassan combines technical mining expertise with financial analysis, having evaluated over 100 mining projects globally.',
      achievements: ['PhD Geology, Imperial College', '100+ projects evaluated', 'Technical & financial expertise'],
    },
    {
      name: 'Elena Rodriguez',
      position: 'Risk Management Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Former risk director at Barrick Gold with expertise in operational and financial risk management. Elena has managed risk frameworks for mining operations across four continents.',
      achievements: ['Former Barrick Gold director', 'Global risk management', '4 continents experience'],
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'Deep knowledge of mining and mineral resource markets with decades of combined experience.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality advisory services and strategic solutions.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust, transparency, and mutual success.',
    },
    {
      icon: MapPin,
      title: 'Global Reach',
      description: 'Local presence in Bahrain with international connections and market insights.',
    },
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Intelligent Analytics',
      description: 'Advanced AI algorithms for market trend analysis and predictive modeling in mining finance.',
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Machine learning models that process vast datasets to identify investment opportunities.',
    },
    {
      icon: Cpu,
      title: 'Process Automation',
      description: 'Automated workflows that streamline due diligence and risk assessment procedures.',
    },
    {
      icon: Zap,
      title: 'Real-Time Decision Support',
      description: 'AI-powered dashboards providing instant insights for strategic decision-making.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Regulus Investment</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A leading financial advisory firm specializing in mining and mineral resources, 
              headquartered in the Kingdom of Bahrain.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Bahrain, Regulus Investment emerged from a vision to bridge the gap 
                between traditional finance and the specialized needs of the mining industry. 
                Our founders recognized that mining and mineral resource projects require 
                unique expertise and tailored financial solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have built a reputation for excellence in investment advisory, 
                risk assessment, and strategic consulting. Our deep understanding of both regional 
                markets and global mining trends positions us as trusted advisors to clients 
                across the Middle East and beyond.
              </p>
              <p className="text-lg text-gray-600">
                Today, Regulus Investment continues to lead the way in mining finance, helping 
                clients navigate complex markets and unlock value in their mineral resource investments.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bahrain skyline"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide exceptional financial advisory services that empower mining and 
                mineral resource companies to achieve their strategic objectives and maximize 
                value for all stakeholders.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the premier financial advisory firm for the mining industry in the 
                Middle East, recognized for our expertise, integrity, and commitment to 
                client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent transform -skew-y-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-blue-500/20 to-transparent transform skew-y-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="border-b-4 border-yellow-500 pb-2">AI & Automation Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Regulus Investment, we harness the transformative power of artificial intelligence and automation 
              to revolutionize mining finance. Our cutting-edge AI systems enhance every aspect of our advisory services, 
              from sophisticated risk modeling to predictive market analysis, enabling us to deliver unprecedented 
              insights and strategic advantages to our clients in an increasingly complex global marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI and neural networks visualization"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Cpu className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">Next-Generation Technology</span>
                  </div>
                  <p className="text-sm text-gray-200">Powering the Future of Mining Finance</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                The Future of Mining Finance is Here
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our proprietary AI platform processes millions of data points in real-time, from geological surveys 
                and commodity prices to geopolitical factors and environmental regulations. This comprehensive 
                analysis enables us to identify emerging opportunities, mitigate risks, and optimize investment 
                strategies with unprecedented precision.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Through intelligent automation, we've streamlined complex financial processes, reducing analysis 
                time from weeks to hours while maintaining the highest standards of accuracy and compliance. 
                Our clients benefit from faster decision-making, enhanced due diligence, and strategic insights 
                that drive superior investment outcomes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                  <div className="text-sm text-gray-300">Faster Analysis</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">99.7%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="border-b-4 border-yellow-500 pb-2">Our Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the seasoned professionals who drive Regulus Investment forward with unparalleled expertise in mining finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-500"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-yellow-100"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Linkedin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-yellow-600 font-semibold mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                      
                      <div className="space-y-1">
                        {member.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bahrain Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="border-b-4 border-yellow-500 pb-2">Strategically Positioned in Bahrain</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our headquarters in Manama places us at the epicenter of Middle Eastern finance, where East meets West in the global economy. 
                Bahrain's sophisticated financial infrastructure and regulatory framework provide the ideal foundation for our international mining finance operations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As the financial gateway to the Gulf region, Bahrain offers unparalleled access to capital markets and institutional investors. 
                This strategic location enables us to seamlessly connect mining projects across Africa, Asia, and the Middle East with global funding sources.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From this central hub, we leverage both deep regional market intelligence and international best practices, 
                delivering world-class mining finance solutions that bridge local opportunities with global capital.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">$2B+</div>
                  <div className="text-sm text-gray-600">Transactions Facilitated</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bahrain Financial Harbor skyline"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">Bahrain Financial Harbour</span>
                  </div>
                  <p className="text-sm text-gray-200">Gateway to Middle Eastern Finance</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
