export default function SectionIntro() {
  return (
    <section className="h-[100vh] flex flex-col relative gap-4 items-center overflow-hidden bg-[#ece5db]">
      <div
        className="absolute bottom-24"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src="/section-1.jpg"
          alt=""
          className="mx-auto absolute left-[50%] -z-10 -translate-x-[50%] top-[50%] -translate-y-[50%] h-[55vh]  aspect-[9/16] object-cover object-[60%_50%] rounded-2xl"
        />

        <img src="/frame.png" className="z-20 object-contain h-[70vh]" />
        <img
          className="absolute w-24 right-[40%] -top-20 -rotate-[90deg]"
          src="/orn-flower-7.png"
          alt=""
        />
        <img
          className="absolute w-24 -right-2 -top-0 -rotate-[90deg]"
          src="/orn-flower-9.png"
          alt=""
        />
        <img
          className="absolute w-24 -left-8 bottom-12 -rotate-[20deg]"
          src="/orn-flower-7.png"
          alt=""
        />
        <img
          className="absolute w-20 animate-right-left bottom-8 -right-8"
          src="/orn-flower-8.png"
          alt=""
        />
        <img
          className="absolute w-40 -left-4 -bottom-6 -rotate-12"
          src="/orn-flower-5.png"
          alt=""
        />
        <img className="absolute w-44 -right-2 -bottom-4" src="/orn-flower-6.png" alt="" />
      </div>
    </section>
  );
}
