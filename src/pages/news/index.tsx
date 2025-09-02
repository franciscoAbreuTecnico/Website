import SubscribePopup from "@/src/components/utils/SubscribePopup";
import { useState } from "react";
import MyNews from "@/src/components/news/NewsCoverflowEffect";
import MyDefaultPage from "@/src/components/DefaultPage";

export default function News() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubscribeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <MyDefaultPage>
      {/* Container with proper spacing for mobile and desktop */}
      <div className="pt-[10vh] pb-[12vh] min-h-screen flex flex-col lg:pt-0 lg:pb-0">
        <div className="flex-1 flex flex-col">
          <MyNews onSubscribeClick={handleSubscribeClick} />
        </div>
      </div>
      <SubscribePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </MyDefaultPage>
  );
}
