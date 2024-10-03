const HacktoberfestCallout = () => {
  return (
    <div className="bg-[#1C1C1C] text-[#F3F0E0] [color-scheme:dark] px-8">
      <div className="container mx-auto py-24 flex flex-col-reverse lg:flex-row gap-16 justify-between lg:items-center">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold leading-normal">
            Participating in Hacktoberfest?
          </h1>
          <p className="text-[#C5BCC4] max-w-2xl leading-relaxed">
            In the spirit of Hacktoberfest season this month, we're offering
            special goodies to those who actively contribute to Razorpay's open
            source repositories.
          </p>

          <a
            href="/hacktoberfest-2024"
            className="mt-10 inline-block bg-[#F3F0E0] px-6 py-2 text-[#1C1C1C] font-semibold rounded-sm transition-colors hover:bg-[#E0DAB8]"
          >
            Read more
          </a>
        </div>
        <img
          src="/hacktoberfest-logo.svg"
          className="w-full max-w-[400px] xl:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default HacktoberfestCallout;
