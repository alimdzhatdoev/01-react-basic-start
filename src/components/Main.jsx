import TeachingSection from "./TeachingSection";
import DifferenceSection from "./DifferenceSection";
import IntroSection from "./IntroSection";
import TabsSection from "./TabsSecton";
import FeedBack from "./FeedBack";
import { useState } from "react";

export default function Header() {
  const [tab, setTab] = useState("feedback");
  return (
    <main>
      <div className="main_block">
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferenceSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedBack />
          </>
        )}
      </div>
    </main>
  );
}
