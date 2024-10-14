import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className=" dark:text-black text-xl font-bold">
              HeartGuard AI
            </span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900"
            >
              Testimonials
            </Link>
            <Link href="/demo" className="text-gray-600 hover:text-gray-900">
              Demo
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32 flex items-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Predict Heart Disease with AI
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Early detection saves lives. Get your heart health assessment
                today.
              </p>
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="https://a.storyblok.com/f/219851/920x730/128e7d012f/example-of-ai-in-healthcare.webp"
                alt="Heart Health"
                width={200}
                height={100}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Input Your Data",
                  description:
                    "Provide basic health information and lifestyle details.",
                },
                {
                  title: "AI Analysis",
                  description:
                    "Our advanced AI model processes your data for accurate predictions.",
                },
                {
                  title: "Get Results",
                  description:
                    "Receive a comprehensive report on your heart health status.",
                },
                {
                  title: "Expert Review",
                  description:
                    "Optional review of your results by certified cardiologists.",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-500 mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  text: "This AI prediction saved my life. I got checked early and prevented a major issue.",
                },
                {
                  name: "Sarah M.",
                  text: "The accuracy of the prediction was impressive. It motivated me to make lifestyle changes.",
                },
                {
                  name: "Robert L.",
                  text: "Easy to use and understand. The expert review option gave me peace of mind.",
                },
                {
                  name: "Emily R.",
                  text: "I was skeptical at first, but the results were spot on. Highly recommend!",
                },
                {
                  name: "Michael T.",
                  text: "The process was straightforward, and the insights were invaluable.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col justify-between"
                >
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-right">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HeartGuard AI</h3>
              <p className="text-gray-400">
                Empowering you with AI-driven heart health predictions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-400 hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HeartGuard AI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
