import React from "react";
import SlideshowWithPagination from "react-slideshow-with-pagination";


const CARDS_DETAILS = [
    {title: "1" },
    {title: "2" },
    {title: "3" },
    {title: "4" },
    {title: "1" },
    {title: "2" },
    {title: "3" },
    {title: "4" },
    {title: "1" },
    {title: "2" },
    {title: "3" },
    {title: "4" },
    {title: "1" },
    {title: "2" },
    {title: "3" },
    {title: "4" },
]

const Slideshow = () => {
    return (
            <SlideshowWithPagination
                options={CARDS_DETAILS}
                showNumbers={true}
                showDots={false}
                showArrows={false}
                numberOfCardsPerScreen={6}
                showOneCardForWidthLower="sm"
                slideshowContainerMaxWidth={false}
                cardWidth={0}
                cardHeight={0}
            />
  );
};

export default Slideshow