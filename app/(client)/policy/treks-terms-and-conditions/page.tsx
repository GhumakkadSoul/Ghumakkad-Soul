import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="md:px-20 px-4 w-full h-full py-8">
      <h1 className="md:text-3xl text-2xl term relative text-teal-700 font-bold">
        Trek Terms and Conditions
      </h1>
      <div className="mt-12 md:mr-4 font-medium text-[#333] flex flex-col space-y-4">
        <p>
          These are general terms and conditions of Ghumakkad Soul. Which may be
          changed and amended from time to time and apply to all our services.
        </p>
        <p>
          By accessing / browsing using and completing your reservation through
          mobile/website, you acknowledge and agree that you have read and
          understood all the trek terms and conditions set by Ghumakkad Soul as
          below. A bond or contract between customers and Ghumakkad Soul shall
          come into existence once Ghumakkad Soul receives full payment and
          issues your Confirmation Invoice. The customer making the reservation
          or booking the trek on behalf of other trek members accepts all terms
          on their behalf and shall be fully responsible for making the entire
          payment.
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Travel Itinerary</h3>
        <p>
          The travel itinerary is carefully created and designed at Ghumakkad
          Soul. by our mountain experts & professionals. We will attempt to
          adhere to the same. Still, it may be mandatory to alter the same at
          short notice, keeping in mind the current situation and circumstance
          or any event beyond our control such as adverse weather, any natural
          calamity, landslides, vehicle breakdown, Local curfew, strike, or any
          other unforeseen circumstance. All amendments/changes resulting in
          additional costs to be borne by the customers.
        </p>
        <p>
          The driving distance and time mentioned in the itineraries are approx.
          And may vary due to breaks taken en route
        </p>
        <p>
          One should always keep a buffer day before your departure as on
          adventures in the mountains, there are multiple challenges ranging
          from Vehicle breakdowns, landslips, local curfew, strikes, etc. Hence,
          buffer days always help to avoid last-minute panic and hassle; also,
          if everything goes well without any challenges, this day can be
          utilized for local sightseeing or exploring some other attractions of
          the region.{" "}
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Price & Costing</h3>
        <p>
          All costs/prices mentioned on our website of respective products are
          based on current prices, and as per the current Indian government tax
          structure, Reserves all rights to alter or change already published
          prices on the website or any of our documents without any prior notice
          or information
        </p>
        <p>
          Note that the cost for these programs was determined and quoted based
          on the current tax structure; any modifications and increases in tax
          structure enforced by the government officials, local administration,
          or local associations will affect the cost and will result in
          additional costs to be borne by the client.
        </p>
        <p>
          The cost of any travel product can change anytime unless you have
          secured your slots or price by paying advance payment; kindly note
          even the quoted price given at the time of inquiry can be changed
          unless booked within the allotted time frame.
        </p>
        <p>
          If there is a significant increase in the price of transportation,
          Local Union, Government (including fuel surcharges), or accommodations
          provided by other parties than Ghumakkad Soul. This will influence the
          cost. The additional cost of the unprecedented is at the expense of
          the customer.
        </p>
        <p>
          <span className="font-bold text-teal-700">Imp. Note:</span> All prices
          quoted for respective itineraries are calculated keeping in mind a
          minimum of 6 people in a group; in case we do not meet the minimum
          number for a particular trek, Ghumakkad Soul reserves all rights to
          merge the trekkers either to another trek or cancel the trek after
          discussion with the trekkers.
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Payment Terms</h3>
        <p>
          We at Ghumakkad Soul have come up with the most feasible payment
          policy to make it most convenient for all our customers, which is as
          under: –
        </p>
        <ul>
          <li>
            – Pay 30% Advance of the Invoice amount at the time of booking to
            secure your seats
          </li>
          <li>
            – Pay 70 % Remaining amount of the Invoice 7 days before the trek
            date
          </li>
          <li>
            – Any customer failing to pay their Advance or Remaining balance
            payment, the booking will be subject to final confirmation or seat
            availability.
          </li>
          <li>
            – Failing to complete your payment within the given time frame, the
            company reserves all right to cancel your booking or allot your
            booking to another customer without any prior notice and
            information, and also, the company shall not be liable for any
            refund.
          </li>
          <h3 className="text-xl font-bold text-teal-700">Payment method: –</h3>
          <ul className="list-disc px-6 mt-4">
            <li>Google Pay</li>
            <li>Phone Pay</li>
            <li>UPI</li>
            <li>Paytm</li>
            <li>Credit Card</li>
            <li>Debit Card</li>
            <li>We do offer EMI option</li>
          </ul>
        </ul>
        <h3 className="text-2xl font-bold text-teal-700">
          Cancellation Policy
        </h3>
        <p>
          We bring you the most fair, feasible, and convenient cancellation
          policy you may visit the link for more details:{" "}
          <Link
            href="/policy/cancellation-policy"
            className="underline text-teal-700"
          >
            Cancellation Policy
          </Link>
        </p>
        <ul className="flex flex-col mt-4 space-y-4 px-4 list-decimal">
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
            by Ghumakkad Soul and we are set to take you on a trek.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-teal-700">Date Change Policy</h3>
        <ul className="flex flex-col list-decimal space-y-3 px-4">
          <li>
            Trek Date request should be sent to: Chain Singh Rawat at{" "}
            <span className="text-teal-700  font-semibold">+91 9912345678</span>
          </li>
          <li>Trek Date request should be 7 days prior to the trek date</li>
          <li>
            One-time trek date change will be Free of Charge, second time
            onwards it will be subject to an additional cost of 10% of the
            Invoice Amount Per time.{" "}
          </li>
          <li>
            Once the date change is done booking is not provisioned for
            Cancellation
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-teal-700">
          Unused Services & Items on your Adventures
        </h3>
        <p>
          No trekkers can claim, and No refund will be made for any unused
          services, such as unused accommodation, missed meals, transport
          services, sightseeing, or any other services. Such unused services are
          neither refundable nor exchangeable (no exceptions).
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Accommodation</h3>
        <p>
          On our treks, accommodation is normally provided on multi-sharing at
          the hotels/guest houses and on double-sharing in tents. Single and
          Double occupancy at the Guest Houses / Hotel may attract a supplement
          cost. All accommodations used during the trek are basic categories;
          however, neat, clean, and hygienic (Except in Sankari, which is a
          deluxe property owned by Ghumakkad Soul). The trekkers need to carry
          their toiletries.
        </p>
        <p>
          When on a Trek, we use our customized Trekking equipment like dining,
          Kitchen, Toilet and sleeping tents, Sleeping mattresses, and Sleeping
          bags; all our equipment is checked before sending them on any of the
          slopes or treks. However, during your stay, if you find any default in
          them, they can be quickly repaired by the team on site; however, you
          will have to inform the Trek Leader, so that the issues are
          immediately resolved on the spot.
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Transportation</h3>
        <p>
          The company reserves the right to employ the services of
          sub-contractors (especially when company-owned transport is engaged).
          However, all drivers are qualified, trained, and experienced in the
          plains and mountains. A client will drive no vehicles at any time.{" "}
        </p>
        <p>
          The vehicles are assigned as per the group size; normally, we use
          Bolero, Tempo Travelers & buses depending on group sizes.
        </p>
        <p>
          All travelers are requested to handle their luggage / personal
          belongings carefully, and you shall be responsible for your luggage;
          when boarding and deboarding the vehicles, make sure you have checked
          and ensured that your luggage is safe and not left in the vehicle
          itself.{" "}
        </p>
        <h3 className="text-2xl font-bold text-teal-700">
          Pickup and drop-off locations
        </h3>
        <p>
          Normally, all the base camps are at a distance from the main city
          centers; therefore, all pickups are in the early morning, and general
          pickup timings are between 5:30 to 6:30 AM
        </p>
        <p>
          The Pickup locations are selected keeping in mind one particular
          centralized point, which is convenient for all trekkers coming from
          the Airport, Railway station, or Bus station; in general, the location
          is close to the Railway or bus station.
        </p>
        <p>
          In very special cases, 30 30-minute buffer time is given to trekkers
          in case they are delayed due to any reason. One failing to reach the
          destination on specified times will be responsible for reaching the
          base camp on their own and at his own cost. The company will not be
          responsible for bearing/refunding any cost.
        </p>
        <p>
          The drop location is always the same as the pickup point, and we
          normally drop all our trekkers to a designated location in the evening
          hours between 6:00 to 7:00 PM. We suggest and recommend all trekkers
          to always make their onward plans late at night or the next day.
        </p>
        <h3 className="text-2xl font-bold text-teal-700">
          Trek Leaders and Guides
        </h3>
        <p>
          All our Trek leaders and guides are qualified, highly experienced, and
          professional; they are well-trained by Ghumakkad Soul to take you on
          an adventure.
        </p>
        <p>
          All our Trek Leaders are certified by National institutions in Basic
          Mountaineering Courses and advanced mountaineering courses. They are
          also well-trained in basic first aid and have been trained in search
          and rescue.
        </p>
        <h3 className="text-2xl font-bold text-teal-700">Insurance</h3>
        <p>
          Ghumakkad Soul does not provide any Travel, Adventure, or medical
          insurance, nor do we charge the same from our customers. We strongly
          recommend each trekker mandatorily get insurance, and our team will be
          happy to assist you in getting your insurance done from the
          third-party insurance company
        </p>
        <p>
          Our Team will only be assisting you to get in touch with the firm for
          your insurance coverage; however, you will be solely responsible for
          making your payment and getting insurance done, and all terms and
          conditions will be applicable as per the insurance issuance company,
          even the at the time of claiming Ghumakkad Soul team does not involve
          in the same, as you will be in direct communication with the insurance
          issuance company, remember we are just assisting you and redirecting
          you to the insurance helping in build communication and nothing
          beyond.{" "}
        </p>
        <h3 className="text-2xl font-bold text-teal-700">
          Health and medical condition
        </h3>
        <p>
          The company must be notified in writing at the time of booking of any
          medical condition, physical challenge, or any other mental challenge
          that may affect the fitness to travel. Failure to notify the company
          may result in trekkers being refused to travel or take on an
          Adventure, and failure to notify the company may result in 100 %
          cancellation charges.
        </p>
        <p>
          Smoking or drinking alcohol during the excursion is strictly
          forbidden. If you are found to violate these rules, you will be banned
          from participating in the trip, and it will be canceled immediately
          without prior notification or any refund.
        </p>
      </div>
    </div>
  );
};

export default page;
