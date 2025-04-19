import React from 'react';

const PoliciesPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
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
          <p className="mb-4">
            Capital Curv is committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you engage with our platform.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Personal Information: Name, email, phone number, address, and payment details.</li>
                <li>Trading Activity: Performance data from evaluations and funded accounts.</li>
                <li>Technical Data: IP addresses, browser type, device information, and cookies.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>To process applications and manage funded accounts.</li>
                <li>To enhance and personalize your experience.</li>
                <li>To fulfill legal obligations.</li>
                <li>To send updates and promotions (with consent).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Data Security & Retention</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Secure servers, encryption, and firewalls.</li>
                <li>Data retention based on business/legal needs.</li>
                <li>Deletion requests: privacy@capitalcurv.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Third-Party Sharing</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No selling or renting of personal data.</li>
                <li>Shared only with payment processors, regulators, and analytics partners.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">5. Your Rights</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Access, correction, or deletion of data.</li>
                <li>Opt-out of marketing at any time.</li>
                <li>Email: privacy@capitalcurv.com</li>
              </ul>
            </div>
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
