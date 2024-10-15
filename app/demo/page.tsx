"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";

export default function Demo() {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: { [key: string]: number } = {};

    // Convert formData to a simple object with correct data types
    formData.forEach((value, key) => {
      formValues[key] = Number(value); // Convert all values to numbers
    });

    try {
      const response = await axios.post("http://localhost:8000/api/predict", {
        age: formValues.age,
        sex: formValues.gender,
        cp: formValues.cp,
        trestbps: formValues.trestbps,
        chol: formValues.chol,
        fbs: formValues.fbs,
        restecg: formValues.restecg,
        thalach: formValues.thalach,
        exang: formValues.exang,
        oldpeak: formValues.oldpeak,
        slope: formValues.slope,
        ca: formValues.cp,
        thal: formValues.thal,
      }); // Send as JSON
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(formValues);

    // In a real application, you would send this data to your backend for processing
    // For this demo, we'll just set a mock result
    // setResult(
    //   "Based on the provided information, your risk of heart disease is low. However, please consult with a healthcare professional for a comprehensive evaluation."
    // );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">HeartGuard AI</span>
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className=" px-20 flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">
          Heart Disease Prediction Demo
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="age" className="block text-sm font-medium">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              required
              className="mt-1 block w-full border dark:text-black border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="0"
                  id="male"
                  name="gender"
                  defaultChecked
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" value={1} id="female" name="gender" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="cp" className="block text-sm font-medium">
              CP (mg/dL)
            </label>
            <input
              type="number"
              id="cp"
              name="cp"
              required
              className="mt-1 block w-full border border-gray-300 dark:text-black rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="trestbps" className="block text-sm font-medium">
              trestbps (mmHg)
            </label>
            <input
              type="number"
              id="trestbps"
              name="trestbps"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="chol" className="block text-sm font-medium">
              chol (mmHg)
            </label>
            <input
              type="number"
              id="chol"
              name="chol"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="fbs" className="block text-sm font-medium">
              fbs (mmHg)
            </label>
            <input
              type="number"
              id="fbs"
              name="fbs"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="restecg" className="block text-sm font-medium">
              restecg (mmHg)
            </label>
            <input
              type="number"
              id="restecg"
              name="restecg"
              required
              step="any"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="thalach" className="block text-sm font-medium">
              thalach (mmHg)
            </label>
            <input
              type="number"
              id="thalach"
              name="thalach"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="exang" className="block text-sm font-medium">
              exang (mmHg)
            </label>
            <input
              type="number"
              id="exang"
              name="exang"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="oldpeak" className="block text-sm font-medium">
              oldpeak (mmHg)
            </label>
            <input
              type="number"
              id="oldpeak"
              name="oldpeak"
              required
              step="any" 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="slope" className="block text-sm font-medium">
              slope (mmHg)
            </label>
            <input
              type="number"
              id="slope"
              name="slope"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="ca" className="block text-sm font-medium">
              ca (mmHg)
            </label>
            <input
              type="number"
              id="ca"
              name="ca"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label htmlFor="thal" className="block text-sm font-medium">
              thal (bpm)
            </label>
            <input
              type="number"
              id="thal"
              name="thal"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 dark:text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Do you smoke?</label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input type="radio" value="yes" id="smoke_yes" name="smoker" />
                <label htmlFor="smoke_yes">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  id="smoke_no"
                  name="smoker"
                  defaultChecked
                />
                <label htmlFor="smoke_no">No</label>
              </div>
            </div>
          </div>
          <Button type="submit" className=" dark:bg-white dark:text-black px-4 py-2">Predict Risk</Button>
        </form>
        {result && (
          <div className="mt-8 p-4 dark:text-black bg-blue-50 border border-blue-200 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Prediction Result</h2>
            <p>{JSON.stringify(result.prediction)}</p>
          </div>
        )}
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
