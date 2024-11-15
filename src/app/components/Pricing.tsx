"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Component() {
  const [billingCycle, setBillingCycle] = useState('yearly')

  const plans = [
    {
      name: 'Hobby',
      price: 'FREE',
      description: 'Unlimited Projects*',
      features: [
        'Standard Themes',
        'Macroscope domain',
        'Basic analytics',
        'Macroscope branding',
      ],
      cta: 'Start for free →',
    },
    {
      name: 'Creator',
      price: billingCycle === 'yearly' ? '$12' : '$14',
      description: 'per project billed yearly',
      features: [
        'Custom themes',
        'Publish with your domain',
        'Traffic analytics',
        'Macroscope branding',
      ],
      cta: 'Start free trial →',
    },
    {
      name: 'Creator Pro',
      price: billingCycle === 'yearly' ? '$24' : '$28',
      description: 'per project billed yearly',
      features: [
        'Custom themes',
        'Publish with your domain',
        'Traffic Analytics',
        'No Macroscope branding',
      ],
      cta: 'Start free trial →',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">Pricing</h2>
      <p className="text-2xl text-center mb-4">
        Start for Free
        <br />
        Upgrade for premium features.
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === 'monthly'
              ? 'bg-gray-200 text-gray-800'
              : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Pay Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === 'yearly'
              ? 'bg-gray-200 text-gray-800'
              : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setBillingCycle('yearly')}
        >
          Pay yearly
        </button>
      </div>
      {billingCycle === 'yearly' && (
        <p className="text-center text-blue-500 mb-8">2 months free</p>
      )}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-1">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
            <button className="w-full py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-50 mb-4">
              {plan.cta}
            </button>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check
                    className={`mr-2 h-5 w-5 ${
                      index === 3 && plan.name !== 'Creator Pro'
                        ? 'text-gray-300'
                        : 'text-green-500'
                    }`}
                  />
                  <span
                    className={
                      index === 3 && plan.name !== 'Creator Pro'
                        ? 'text-gray-300'
                        : ''
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-sm text-gray-500">
        15-day free trial • Cancel anytime • Money-back guarantee
      </p>
    </div>
  )
}