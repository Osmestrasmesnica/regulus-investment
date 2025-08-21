import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import ParticlesBackground from '../components/ParticlesBackground';

export default function HomePage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment guidance for mining and mineral resource projects.',
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies for your investments.',
    },
    {
      icon: Users,
      title: 'M&A Consulting',
      description: 'Expert guidance through mergers, acquisitions, and strategic partnerships.',
    },
    {
      icon: Award,
      title: 'Project Financing',
      description: 'Tailored financing solutions for mining operations and development projects.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-6rem)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Regulus <span className="text-yellow-500">Investment</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Leading financial advisory firm specializing in mining and mineral resources, 
            delivering strategic investment solutions from the heart of Bahrain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-900 px-8 py-3">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expertise in Mining Finance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive financial advisory services tailored specifically 
              for the mining and mineral resources industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted Advisors in Mining Finance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in Bahrain, Regulus Investment has established itself as a leading 
                financial advisory firm with deep expertise in the mining and mineral 
                resources sector. Our team combines local market knowledge with global 
                industry insights.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique challenges and opportunities in mining finance, 
                from early-stage exploration to large-scale production operations.
              </p>
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-white">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mining operation"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore New Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise in mining finance can help drive your next project forward.
          </p>
          <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
