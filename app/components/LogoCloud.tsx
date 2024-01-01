export default function LogoCloud() {
  return (
    <div className="">
      <h2 className="font-semibold tracking-tight text-[#FF4F01] text-2xl mb-2 md:mb-5 text-center">
        trusted by
      </h2>
      <div className="mx-auto max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none grid grid-cols-2 md:grid-cols-5">
        <img
          className="max-h-12 w-full object-contain col-span-1"
          src="/paldesk.svg"
          alt="Paldesk"
          width={158}
          height={48}
        />
        <img
          className="max-h-12 w-full object-contain col-span-1"
          src="/aarke.svg"
          alt="Aarke"
          width={158}
          height={48}
        />
        <img
          className="max-h-12 w-full object-contain col-span-1 "
          src="/coi.svg"
          alt="Coi"
          width={158}
          height={48}
        />
        <img
          className="max-h-12 w-full object-contain col-span-1 grayscale"
          src="/droppa.svg"
          alt="Droppa"
          width={158}
          height={48}
        />
        <img
          className="max-h-12 w-full object-contain col-span-1 grayscale"
          src="/phishar.svg"
          alt="PhishAR"
          width={158}
          height={48}
        />
      </div>
    </div>
  );
}
