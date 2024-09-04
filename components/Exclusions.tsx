import React from "react";

const Exclusions = () => {
  return (
    <div className="w-full bg-[#f5f7f7] rounded-2xl px-4 py-8 mt-12 shadow-sm">
      <h1 className="text-teal-700 font-bold text-2xl text-center">
        Trek Cost Exclusions
      </h1>
      <ul className="flex flex-col mt-8 list-decimal px-6 space-y-3">
        <li>GST 5% (it is Mandatory)</li>
        <li>
          <span>Trek Insurance: </span>(Ghumakkad Soul recommends each trekker
          to get insurance)
        </li>
        <li>
          Any Meals/accommodation beside the itinerary or not mentioned in the
          program.
        </li>
        <li>Any Bus / Airfare to/from trek start/end point</li>
        <li>Personal Medical expenses do carry your medication.</li>
        <li>
          Any personal services such as Laundry, phone calls, liquors, mineral
          water, etc.
        </li>
        <li>Any still / video camera fee </li>
        <li>
          Any Entrance fee Monuments, Monasteries, Museums, Temples – Pay
          directly on the spot.
        </li>
        <li>
          Mules or porter charges to carry private baggage (Offload Charges for
          bag 300 per day),{" "}
          <span className="font-bold text-teal-700">
            Note: Bag weight should not be more than 10 kg.
          </span>
        </li>
        <li>Any emergency evacuation charges</li>
        <li>
          Any services that are not mentioned in the cost inclusion section.
        </li>
      </ul>
    </div>
  );
};

export default Exclusions;
