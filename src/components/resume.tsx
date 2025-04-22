type ResumeItemProps = {
  year: string;
  title: string;
  subtitle: string;
};

const ResumeItem = ({ year, title, subtitle }: ResumeItemProps) => (
  <div className="border-l-4 border-indigo-600 pl-4 mb-6">
    <p className="text-indigo-600 font-semibold text-sm md:text-base mb-1">{year}</p>
    <p className="text-black font-bold">{title}</p>
    <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
  </div>
);

export default function Resume() {
  return (
    <section
      id="resume"
      className="scroll-mt-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 gap-6"
    >
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
        {/* Judul */}
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black relative inline-block">
            Resume?
            <div className="h-[5px] w-[50px] bg-indigo-600 mt-2 mx-auto"></div>
          </h1>
        </div>

        {/* 2 Kolom */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* Education */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold text-black mb-4">My Education</h2>
            <ResumeItem year="2025" title="Full Stack Web Development Bootcamp" subtitle="Purwadhika Digital Technology School" />
            <ResumeItem year="1999 - 2002" title="Electronic Engineering" subtitle="University of Indonesia" />
            <ResumeItem year="1993 - 1996" title="Electronic Engineering" subtitle="Electronic Engineering Polytechnic Institute of Surabaya" />
            <ResumeItem year="1991 - 1993" title="High School Science Major" subtitle="National High School" />
          </div>

          {/* Experience */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold text-black mb-4">My Experiences</h2>
            <ResumeItem year="2010 - Present" title="IT Directorate" subtitle="PT. Telkomsel" />
            <ResumeItem year="2005 - 2010" title="Network Directorate" subtitle="PT. Telkomsel" />
            <ResumeItem year="2001 - 2005" title="Engineer" subtitle="PT. Pacific Satelite Nusantara." />
            <ResumeItem year="1996 - 2001" title="Engineer" subtitle="PT. NEC Humpuss Semiconductor" />
          </div>
        </div>
      </div>
    </section>
  );
}
