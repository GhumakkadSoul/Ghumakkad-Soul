import Link from "next/link";
import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="w-full bg-[#f5f7f7] rounded-2xl px-4 py-8 mt-12 shadow-sm">
      <h1 className="text-teal-700 font-bold text-2xl text-center">
        Cancellation Policy
      </h1>
      <ul className="flex flex-col mt-4 space-y-4 pr-4 list-decimal px-8">
        <li className="text-[17px]">
          <span className="text-teal-700 font-bold">
            Cancelling prior 21 days from trek start date
          </span>{" "}
          – 10% deduction of the invoice amount towards GST & transaction
          charges, 90% is refunded as trek voucher with 1 year validity.
        </li>
        <li className="text-[17px]">
          <span className="text-teal-700 font-bold">
            {" "}
            Cancelling prior 15-20 days from trek start date
          </span>{" "}
          – 30% deduction of the invoice amount towards GST, Transaction,
          accommodation at Base, ration, etc. 70% is refunded as a trek voucher
          with 1 years validity.
        </li>
        <li className="text-[17px]">
          <span className="text-teal-700 font-bold">
            Cancelling prior 7-14 days from trek dates
          </span>{" "}
          – 50% deduction of the invoice amount towards GST, Transaction,
          accommodation at Base, ration, Trekleaders, permits, equipment etc.
          50% is refunded as a trek voucher with 1 year validity.
        </li>
        <li className="text-[17px]">
          <span className="text-teal-700 font-bold">
            Cancelling prior 1-6 days from trek dates
          </span>{" "}
          – 100% deduction of the invoice amount As all arrangements are made by
          Trekup India and we are set to take you on a trek.
        </li>

        <li>
          Want to Know About Our:{" "}
          <Link
            href="/policy/cancellation-policy"
            className="underline text-teal-700"
          >
            Cancellation Policy
          </Link>
        </li>
        <li>
          Want to Know About Our:{" "}
          <Link
            href="/policy/treks-terms-and-conditions"
            className="underline text-teal-700"
          >
            Trek Terms And Conditions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CancellationPolicy;
