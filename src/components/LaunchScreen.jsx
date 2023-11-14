/* eslint-disable react/prop-types */
export default function LaunchScreen({ name, onOpenInvitation }) {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  return (
    <section
      id="launch-screen"
      className="relative h-[100svh] fillable-height flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-[20vh] -left-[70vw] opacity-90">
          <img
            src="/orn-tree.png"
            alt=""
            className="w-[120vw] pointer-events-none"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="800"
            onContextMenu={handleContextMenu}
          />
        </div>

        <div className="absolute -top-[20vh] -right-[70vw] opacity-90">
          <img
            src="/orn-tree.png"
            alt=""
            className="w-[120vw] pointer-events-none"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="800"
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute -bottom-16 -left-24">
          <img
            src="/orn-flower-1.png"
            alt=""
            className="pointer-events-none w-72"
            onContextMenu={handleContextMenu}
          />
        </div>

        <div className="absolute z-10 -bottom-16 -left-24">
          <img
            src="/orn-flower-1.png"
            alt=""
            className="pointer-events-none w-72"
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute bottom-0 z-20 -left-4 animate-right-left">
          <img
            src="/orn-flower-4.png"
            alt=""
            className="pointer-events-none w-28"
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="800"
            onContextMenu={handleContextMenu}
          />
        </div>

        <div className="absolute z-20 -bottom-16 -right-0">
          <img
            src="/orn-flower-3.png"
            alt=""
            className="pointer-events-none w-36"
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute bottom-0 z-10 -right-4 animate-left-right">
          <img
            src="/orn-flower-2.png"
            alt=""
            className="w-28 scale-x-[-1] pointer-events-none"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="800"
            onContextMenu={handleContextMenu}
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 z-30 text-center bottom-20">
        <div className="mb-8">
          <h1
            className="text-[#d9b788] font-bold leading-normal text-[13vw] font-writing shadowed-text"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Nova &amp; Fadli
          </h1>
          <p
            className="text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000"
            data-aos-offset="0"
          >
            Hai {name}
          </p>
        </div>

        <button
          type="button"
          className="text-[#52331a] shadow bg-[#e9c695] hover:bg-[#d9b788]  font-medium rounded-3xl px-5 py-2.5"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="2000"
          data-aos-offset="0"
          onClick={onOpenInvitation}
        >
          Open Invitation
        </button>
      </div>
    </section>
  );
}
