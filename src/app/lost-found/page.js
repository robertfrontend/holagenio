import HeroLostFound from "@/components/lost-found/Hero";

import Principal from "@/components/lost-found/Principal";
const LostAndFound = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background w-full  md:mx-auto pt-20 relative px-4">
      <HeroLostFound />
      <Principal />
    </main>
  );
};

export default LostAndFound;
