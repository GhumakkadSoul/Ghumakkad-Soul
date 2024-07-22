import React from "react";

const page = () => {
  return (
    <div className="w-full h-full md:px-20 px-4 py-8">
      <h1 className="text-3xl text-teal-700 text-left  font-bold relative cancel">
        Cancellation Policy
      </h1>
      <div className="mt-12 pr-4 text-[#333] font-semibold">
        <p>
          There is high excitement or can say next level joy in planning your
          trip outdoors, however when it gets cancelled there is always a pain
          with hope to make oneself understand we will plan next time. Though
          Ghumakkad Soul carries all ground operations hence there is a very
          rare chance that treks are cancelled from our end , however if it gets
          cancelled from trekkers end or because of any unforeseen
          circumstances, weather condition, govt. regulation or any other region
          beyond our control than following cancellation will be applicable. It
          is wise to make your booking at least two months in advance. In the
          event of cancellation of trek/adventure activity services due to any
          avoidable / unavoidable reasons we must be notified of the same in
          writing. Cancellation charges will be effective from the date we
          receive advice in writing.
        </p>
        <h2 className=" text-teal-700 font-bold mt-4 text-2xl">
          We bring you most fair, feasible and convenient cancellation policy as
          under:-
        </h2>
        <ul className="flex flex-col mt-4 space-y-4  list-decimal px-4">
          <li className="text-[17px]">
            <span className="text-teal-700">
              Cancelling prior 21 days from trek start date
            </span>{" "}
            – 10% deduction of the invoice amount towards GST & transaction
            charges, 90% is refunded as trek voucher with 1 year validity.
          </li>
          <li className="text-[17px]">
            <span className="text-teal-700">
              {" "}
              Cancelling prior 15-20 days from trek start date
            </span>{" "}
            – 30% deduction of the invoice amount towards GST, Transaction,
            accommodation at Base, ration, etc. 70% is refunded as a trek
            voucher with 1 years validity.
          </li>
          <li className="text-[17px]">
            <span className="text-teal-700">
              Cancelling prior 7-14 days from trek dates
            </span>{" "}
            – 50% deduction of the invoice amount towards GST, Transaction,
            accommodation at Base, ration, Trekleaders, permits, equipment etc.
            50% is refunded as a trek voucher with 1 year validity.
          </li>
          <li className="text-[17px]">
            <span className="text-teal-700">
              Cancelling prior 1-6 days from trek dates
            </span>{" "}
            – 100% deduction of the invoice amount As all arrangements are made
            by Trekup India and we are set to take you on a trek.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
