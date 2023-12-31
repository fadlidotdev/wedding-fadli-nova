import "photoswipe/dist/photoswipe.css";
import { Gallery as ImageGallery, Item } from "react-photoswipe-gallery";

export default function SectionGallery() {
  return (
    <section id="section-itstheday" className="relative px-8 py-16 overflow-hidden">
      <h2
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-once="true"
        className="text-[12vw] mb-12 text-center font-bold tracking-normal font-writing"
      >
        Portrait of Us
      </h2>

      <div
        className="relative z-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <ImageGallery>
          <div className="flex flex-wrap gap-2 overflow-hidden">
            <Item original="/gallery-01.jpg" thumbnail="/gallery-01.jpg" width="1061" height="1591">
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src="/gallery-01.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              )}
            </Item>

            <div className="flex w-full gap-2 overflow-hidden">
              <div className="aspect-[3/4] h-40">
                <Item
                  original="/gallery-02.jpg"
                  thumbnail="/gallery-02.jpg"
                  width="1061"
                  height="1591"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-02.jpg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </Item>
              </div>

              <div className="w-full h-40">
                <Item
                  original="/gallery-03.jpg"
                  thumbnail="/gallery-03.jpg"
                  width="1061"
                  height="1591"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-03.jpg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </Item>
              </div>
            </div>

            <div className="flex gap-2 overflow-hidden">
              <div className="h-40">
                <Item
                  original="/gallery-04.jpg"
                  thumbnail="/gallery-04.jpg"
                  width="1036"
                  height="691"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-04.jpg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </Item>
              </div>
              <div className="aspect-[3/4] h-40">
                <Item
                  original="/gallery-05.jpg"
                  thumbnail="/gallery-05.jpg"
                  width="1036"
                  height="691"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-05.jpg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </Item>
              </div>
            </div>

            <div className="flex gap-2 overflow-hidden">
              <div className="h-40">
                <Item
                  original="/gallery-06.jpeg"
                  thumbnail="/gallery-06.jpeg"
                  width="1036"
                  height="691"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-06.jpeg"
                      alt=""
                      className="object-cover object-right w-full h-full"
                    />
                  )}
                </Item>
              </div>

              <div className="h-40">
                <Item
                  original="/gallery-07.jpeg"
                  thumbnail="/gallery-07.jpeg"
                  width="1036"
                  height="691"
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/gallery-07.jpeg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </Item>
              </div>
            </div>
          </div>
        </ImageGallery>
      </div>

      <div
        className="absolute -left-16 top-10"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <img src="/orn-flower-15.png" alt="" className="w-32" />
      </div>

      <div
        className="absolute -right-16 top-10"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <img src="/orn-flower-15.png" alt="" className="w-32" />
      </div>

      <div
        className="absolute -right-24 top-[30%]"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-once="true"
      >
        <img src="/orn-flower-10.png" alt="" className="w-32" />
      </div>

      <div
        className="absolute -left-24 top-[60%] -scale-x-100"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-once="true"
      >
        <img src="/orn-flower-10.png" alt="" className="w-32" />
      </div>

      <div
        className="absolute -right-24 top-[90%]"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-once="true"
      >
        <img src="/orn-flower-10.png" alt="" className="w-32" />
      </div>
    </section>
  );
}
