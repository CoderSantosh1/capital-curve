import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="text-gray-800">
      {/* Banner Section */}
      <div className="bg-red-100 mt-15 md:mt-15 py-8 px-4 md:px-10 text-center shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700">
          Refund & Cancellation Policy
        </h2>
        <p className="mt-2 text-red-600 text-base md:text-lg">
          Please read our policy to understand how we handle cancellations and
          refunds.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-6 py-10 max-w-4xl mx-auto space-y-6 text-justify">
        <p>
          This Refund and Cancellation Policy outlines the terms under which
          users may request a refund or cancellation for a membership or service
          purchased through the Capital Curv platform.
        </p>

        <section>
          <h2 className="text-xl font-semibold">1. Membership Cancellations</h2>
          <p>
            Membership cancellations will not be entertained once a plan is
            purchased. Capital Curv does not allow users to cancel a membership
            after the order is confirmed. Membership plans are considered active
            immediately upon payment confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            2. Non-Refundable Nature of Services
          </h2>
          <p>
            All plans or services offered on Capital Curv are non-refundable and
            non-cancellable, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Failure to complete the evaluation phase</li>
            <li>Change of mind or circumstances</li>
            <li>Technical inability or trading-related performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            3. Duplicate or Failed Transactions
          </h2>
          <p>Refunds will only be considered under the following conditions:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Duplicate Payment: If the user is charged multiple times for the
              same membership plan.
            </li>
            <li>
              Technical Failure on Our End: If a technical issue on the platform
              prevents membership activation after successful payment.
            </li>
          </ul>
          <p className="mt-2">
            In such cases, users must contact our support team within 7 days of
            the transaction, providing full payment details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Platform-Only Services</h2>
          <p>
            All services provided by Capital Curv are platform-based and do not
            involve any physical products. Therefore, policies related to
            delivery, shipping, and manufacturer warranty are not applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            5. Refund Processing Timeline
          </h2>
          <p>
            If a refund is approved as an exception, it will be processed within
            7–10 business days and credited to the original payment method.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Contact for Support</h2>
          <p>
            For refund-related concerns, please write to us at{" "}
            <a
              href="mailto:support@capitalcurv.com"
              className="text-blue-600 underline"
            >
              support@capitalcurv.com
            </a>{" "}
            with full transaction details.
          </p>
        </section>

        <p>
          By purchasing a membership on Capital Curv, you agree to abide by this
          Refund and Cancellation Policy in its entirety.
        </p>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
