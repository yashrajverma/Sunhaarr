import { useEffect, useState } from "react";
import { AppImage } from "./AppImage";
import { AppCarouselIndexer } from "./AppCarouselIndexer";
import { AppCarouselButton } from "./AppCarouselButton";

export const AppCarousel = ({ images }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {

    const timeout = setTimeout(() => {
      if (selected >= images.length - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    }, 1500);


    return () => clearTimeout(timeout);
  }, [selected, images.length]);

  return (
    <div className="w-full h-[70vh] relative overflow-hidden">
      {images.map((image, i) => (
        <AppImage
          key={`image-${i}`}
          image={image}
          index={i}
          selected={selected}
        />
      ))}
      <AppCarouselIndexer selected={selected} imagesLenght={images.length} />
      {selected > 0 && (
        <AppCarouselButton
          direction="left"
          onClick={() => setSelected(selected - 1)}
        />
      )}
      {selected < images.length - 1 && (
        <AppCarouselButton
          direction="right"
          onClick={() => setSelected(selected + 1)}
        />
      )}
    </div>
  );
};