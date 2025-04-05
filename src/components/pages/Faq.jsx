import React from "react";

const FAQPage = () => {
  return (
    <div className="max-w-4xl mt-4 md:mt-8 mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">FAQ - Privacy Policy & Terms</h1>

      {/* Privacy Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

        <h3 className="text-xl font-medium mt-6 mb-2">1. Information We Collect</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Personal Information: Name, email, phone number, address, and payment details.</li>
          <li>✅ Trading Activity: Performance data from evaluations and funded accounts.</li>
          <li>✅ Technical Data: IP addresses, browser type, device information, and cookies for security and analytics.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ To process evaluation applications and manage funded accounts.</li>
          <li>✅ To improve our platform, services, and customer support.</li>
          <li>✅ To comply with legal and regulatory obligations.</li>
          <li>✅ To send service-related updates, promotions, and marketing content (with user consent).</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">3. Data Security & Retention</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ We use encryption, secure servers, and firewalls to protect your data.</li>
          <li>✅ Data is retained only as long as necessary for business and legal purposes.</li>
          <li>✅ Users can request data deletion by contacting [Insert Contact Email].</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">4. Third-Party Sharing</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ We do not sell or rent personal data.</li>
          <li>✅ We may share data with payment processors, regulatory authorities, and analytics providers.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">5. Your Rights</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Access, correct, or delete your personal data.</li>
          <li>✅ Opt-out of marketing communications.</li>
          <li>✅ Withdraw consent for data processing. To exercise these rights, email [Insert Contact Email].</li>
        </ul>
      </section>

      {/* Terms of Service */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>

        <p className="mb-4">By using Capital Curv, you agree to these terms. If you do not accept them, please refrain from using our platform.</p>

        <h3 className="text-xl font-medium mt-6 mb-2">1. Eligibility</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Users must be 18 years or older to participate.</li>
          <li>✅ Capital Curv reserves the right to accept or reject applicants at its discretion.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">2. Trading & Funded Accounts</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Traders must follow all evaluation and funded account rules.</li>
          <li>✅ Breach of rules may result in account termination and loss of funding.</li>
          <li>✅ Capital Curv is not liable for losses due to market conditions or trader actions.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">3. Intellectual Property</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ All website content, logos, and educational materials are owned by Capital Curv.</li>
          <li>✅ Users may not reproduce, copy, or distribute content without permission.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">4. Account Termination</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Capital Curv may suspend or terminate accounts for violating policies.</li>
          <li>✅ Traders are responsible for maintaining the security of their login credentials.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">5. Dispute Resolution</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Any disputes shall be resolved through mediation.</li>
          <li>✅ If unresolved, disputes will be settled via arbitration in New Delhi, India.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">6. Updates to Policies</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Capital Curv may modify these terms, and users will be notified of major changes.</li>
        </ul>

        <p className="mt-4">By using our platform, you agree to our Privacy Policy and Terms of Service.<br/>For questions or concerns, contact us at: [Insert Contact Email].</p>
      </section>
    </div>
  );
};

export default FAQPage;
