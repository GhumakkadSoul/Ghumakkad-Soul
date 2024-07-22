import React from "react";

const Includes = () => {
  return (
    <div className="w-full bg-[#f5f7f7] rounded-2xl px-4 py-8 mt-12 shadow-sm">
      <h1 className="text-teal-700 font-bold text-2xl text-center">
        Trek Cost Inclusions
      </h1>
      <ul className="flex flex-col mt-8 list-decimal px-4 space-y-3">
        <li>
          <span className="text-teal-700 font-bold">Stay: </span> tented
          accommodation at individual campsites of Ghumakkad Soul on twin
          sharing
        </li>
        <li>
          <span className="text-teal-700 font-bold">Meals: </span> Ghumakkad
          Soul will provide freshly cooked meals during the trek starting with
          Dinner on Day 1 to tea, coffee on End day (Meals are simple,
          nutritious, and vegetarian)
        </li>
        <li>
          <span className="text-teal-700 font-bold">Trek Equipment: </span>{" "}
          Sleeping bag, Sleeping tents, Kitchen tent, Dining tent, Toilet Tent.
        </li>
        <li>
          <span className="text-teal-700 font-bold">Amenities: </span> All
          utensils, sleeping mattresses (Black foam mats), Crampons, and Gaiters
          for snow.
        </li>
        <li>
          <span className="text-teal-700 font-bold">Health & Safety: </span>
          First Aid Box, Oxygen Cylinders, Stretchers, Oxi meters, BP Machines,
          health.
        </li>
        <li>
          <span className="text-teal-700 font-bold">Permits: </span> Forest
          Permits and Camping Permission Fee
        </li>
        <li>
          <span className="text-teal-700 font-bold">Trek Crew: </span>High
          Altitude Chef, Helpers, Trek Leader & Guides, and other support teams.
        </li>
        <li>
          <span className="text-teal-700 font-bold">Potters & Mules: </span>{" "}
          Potters and Mules are to carry all trekking equipment, ration, and
          vegetables.
        </li>
      </ul>
    </div>
  );
};

export default Includes;
