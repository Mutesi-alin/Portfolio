import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
});

const Contacts = () => {
  return (
    <div id="contacts" className={`${afacad.className} bg-[#0A3141] p-6 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#F2E5DA]">
        Contacts
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:gap-20 lg:gap-40 mb-8">
        
        {/* Contact Details */}
        <div className="text-lg md:text-xl text-[#F2E5DA]">
          <h3 className="pb-2 font-semibold">Address</h3>
          <p className="pb-4">Kigali, Rwanda</p>
          <h3 className="pb-2 font-semibold">Email</h3>
          <p className="pb-4">alinemutesiii@gmail.com</p>
          <h3 className="pb-2 font-semibold">Phone</h3>
          <p>+250 786766391</p>
        </div>

        {/* Contact Form */}
        <div className="text-lg md:text-xl w-full max-w-md">
          <div className="mb-4">
            <h3 className="font-semibold text-[#F2E5DA]">Full Name</h3>
            <input
              type="text"
              name="fullname"
              className="w-full bg-[#F2E5DA] text-[#002E29] px-3 py-2 rounded-lg border border-[#B1785C] focus:outline-none focus:ring-2 focus:ring-[#B1785C]"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-[#F2E5DA]">Email</h3>
            <input
              type="email"
              name="email"
              className="w-full bg-[#F2E5DA] text-[#002E29] px-3 py-2 rounded-lg border border-[#B1785C] focus:outline-none focus:ring-2 focus:ring-[#B1785C]"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-[#F2E5DA]">Message</h3>
            <textarea
              name="message"
              rows={3}
              className="w-full bg-[#F2E5DA] text-[#002E29] px-3 py-2 rounded-lg border border-[#B1785C] focus:outline-none focus:ring-2 focus:ring-[#B1785C]"
            ></textarea>
          </div>
          <button className="bg-[#B1785C] text-[#F2E5DA] px-8 py-2 rounded-lg font-semibold hover:bg-[#F2E5DA] hover:text-[#B1785C] transition duration-300">
            Send
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#F2E5DA] pt-4">
        <p className="text-center text-md text-[#F2E5DA]">
          © 2025 Mutesi Aline. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
