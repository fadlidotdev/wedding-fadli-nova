import React from "react";

export default function SectionCouple() {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  return (
    <section className="bg-[#ece5db] p-8 text-center relative overflow-hidden">
      <div
        className="absolute z-20 -left-8 -top-0"
        data-aos="fade-down-left"
        data-aos-duration="1000"
        data-aos-delay="1400"
        data-aos-once="true"
        data-aos-offset="0"
      >
        <img src="/orn-flower-1.png" alt="" className="w-28" />
      </div>
      <div
        className="absolute z-20 -right-8 -top-0"
        data-aos="fade-down-right"
        data-aos-duration="1000"
        data-aos-delay="1400"
        data-aos-once="true"
        data-aos-offset="0"
      >
        <img src="/orn-flower-1.png" alt="" className="w-28 -scale-x-100" />
      </div>

      <div
        className="mb-10 space-y-2"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-offset="0"
      >
        <h2 className="text-[9vw] font-bold tracking-normal font-writing">The Wedding Of</h2>
        <p className="text-sm opacity-50">
          Assalamualaikum Warahmatullahi Wabarakatuh with the blessing and mercy from Allah SWT, We
          cordially invite you to the wedding of
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="absolute z-20 -left-[3vw] top-[10vh] animate-right-left">
          <img
            src="/orn-flower-7.png"
            alt=""
            className="w-16"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          />
        </div>

        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-offset="0"
          className="relative flex flex-col items-center"
        >
          <div className="absolute top-0 -left-[1vw] bg-[#822223] aspect-[3/4] w-[250px] rounded-full rounded-tl-full rounded-tr-full"></div>

          <div className="relative h-[375px] w-[250px] rounded-xl overflow-hidden">
            <img
              src="/fadli.jpg"
              alt=""
              className="object-cover rounded-tl-full rounded-tr-full shadow-xl pointer-events-none"
              onContextMenu={handleContextMenu}
            />
          </div>

          <div className="mt-2 space-y-1">
            <h2 className="text-[9vw] text-[#d9b788]">Fadli Hidayatullah</h2>
            <p>Putra Kedua Bapak Ciknani dan Ibu Meri Hartati</p>
          </div>
        </div>

        <span
          className="my-8 mb-12 text-5xl font-writing-2"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="true"
        >
          &
        </span>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="flex flex-col items-center"
        >
          <div className="absolute top-0 -right-[1vw]">
            <div className="relative">
              <div className="bg-[#822223] aspect-[3/4] w-[250px] rounded-full rounded-tl-full rounded-tr-full"></div>
              <div className="absolute bottom-[8vh] z-20 -right-4 animate-left-right">
                <img
                  src="/orn-flower-8.png"
                  alt=""
                  className="w-16"
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-once="true"
                  data-aos-offset="0"
                />
              </div>
            </div>
          </div>

          <div className="relative h-[375px] w-[250px] rounded-xl rounded-tl-full rounded-tr-full overflow-hidden">
            <img
              src="/nova.jpg"
              alt=""
              className="object-cover rounded-tl-full rounded-tr-full pointer-events-none scale-[1.7] relative  -top-10 left-5"
              onContextMenu={handleContextMenu}
            />
          </div>

          <div className="mt-2 space-y-1">
            <h2 className="text-[9vw] text-[#d9b788]">Nova Julita</h2>
            <p>Putri Ketiga Bapak Ahmad Aswan dan Ibu Misiarti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
