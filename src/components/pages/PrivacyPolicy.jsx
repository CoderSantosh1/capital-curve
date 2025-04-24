import React from 'react';

const PoliciesPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="bg-gradient-to-r mt-15 md:mt-15 from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Capital Curv Policies</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your privacy and trust are important to us. Please read our policies carefully.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Privacy Policy</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <p>
              This Privacy Policy describes how AVINADO FINTECH SOLUTION PRIVATE LIMITED and its affiliates (collectively "AVINADO FINTECH SOLUTION PRIVATE LIMITED, we, our, us") collect, use, share, protect or otherwise process your information/personal data through our website https://capitalcurv.com (hereinafter referred to as Platform). Please note that you may be able to browse certain sections of the Platform without registering with us...
            </p>

            <h3 className="text-xl font-semibold">Collection</h3>
            <p>
              We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship...
            </p>

            <h3 className="text-xl font-semibold">Usage</h3>
            <p>
              We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses...
            </p>

            <h3 className="text-xl font-semibold">Sharing</h3>
            <p>
              We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to the services and products offered by them...
            </p>

            <h3 className="text-xl font-semibold">Security Precautions</h3>
            <p>
              To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures...
            </p>

            <h3 className="text-xl font-semibold">Data Deletion and Retention</h3>
            <p>
              You have an option to delete your account by visiting your profile and settings on our Platform...
            </p>

            <h3 className="text-xl font-semibold">Your Rights</h3>
            <p>
              You may access, rectify, and update your personal data directly through the functionalities provided on the Platform.
            </p>

            <h3 className="text-xl font-semibold">Consent</h3>
            <p>
              By visiting our Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy...
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Terms of Service</h2>
          <p className="mb-4">
            By using Capital Curv, you agree to the following terms. If you disagree with any part, please discontinue use of our platform.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Eligibility</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Users must be 18 years or older.</li>
                <li>Capital Curv reserves the right to accept or reject applications.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Trading & Funded Accounts</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Traders must follow all rules.</li>
                <li>Rule violations may lead to account termination.</li>
                <li>Capital Curv isn’t liable for trading losses.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Intellectual Property</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>All content belongs to Capital Curv.</li>
                <li>Reproduction/distribution without permission is prohibited.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Account Termination</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Accounts may be suspended for policy violations.</li>
                <li>Users are responsible for their login credentials.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">5. Dispute Resolution</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Disputes are first handled via mediation.</li>
                <li>If unresolved, arbitration in New Delhi, India.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">6. Policy Updates</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>We may update these policies and notify users via email/platform.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p>Have questions? Email us at <a href="mailto:support@capitalcurv.com" className="text-blue-600 underline">support@capitalcurv.com</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PoliciesPage;
