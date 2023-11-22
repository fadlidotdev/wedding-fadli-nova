import React, { useEffect, useState } from "react";

export default function SectionSaveTheDate({ name }) {
  const targetDate = new Date("2023-11-26T10:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const invitationLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Fadli+%26+Nova+Wedding&dates=20231126T100000/20231126T130000&location=Islamic+Center+Bengkulu,+57HP%2BHWQ,+Padang+Harapan,+Gading+Cempaka,+Bengkulu+City,+Bengkulu+38225,+Indonesia&details=Assalammu'alaikum,+Kami+mengundang+${name}+untuk+menghadiri+pesta+pernikahan+kami ❤️+%7C+Wedding+Fadli+dan+Nova.%0ATerima+Kasih 🙏🏻.`;

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const timeDiff = targetDate - currentTime;

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-8 py-16 flex relative items-center overflow-hidden bg-[#ece5db]">
      <div
        className="rounded-2xl shadow-xl relative bg-[rgb(130,34,35)] text-center text-white w-full overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="4000"
        data-aos-once="true"
      >
        <div
          id="savethedate-photo"
          className="relative"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src="/section-1.jpg" alt="" className="h-[300px] w-full object-cover" />
        </div>

        <div
          className="flex flex-col gap-6 p-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="space-y-1">
            <h3 className="text-3xl tracking-normal">Save The Date</h3>
            <p className="tracking-wide opacity-60">26 November 2023</p>
          </div>

          <div className="grid grid-cols-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-4xl">{timeRemaining.days}</h4>
              <p className="text-sm opacity-60">Days</p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-4xl">{timeRemaining.hours}</h4>
              <p className="text-sm opacity-60">Hours</p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-4xl">{timeRemaining.minutes}</h4>
              <p className="text-sm opacity-60">Minutes</p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-4xl">{timeRemaining.seconds}</h4>
              <p className="text-sm opacity-60">Seconds</p>
            </div>
          </div>

          <a
            href={invitationLink}
            target="__blank"
            className="self-center text-sm px-4 py-2 border-b hover:rounded-lg hover:bg-[#ece5db] hover:text-[#822223]"
          >
            Add to Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
