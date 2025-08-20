import { useState, useEffect } from "react";

export function usePreloadImages(imageUrls) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const promises = imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          if (loadedImages === totalImages) setImagesLoaded(true);
          resolve();
        };
        img.src = src;
      });
    });

    const timeout = setTimeout(() => setImagesLoaded(true), 3000);

    Promise.all(promises).then(() => clearTimeout(timeout));

    return () => clearTimeout(timeout);
  }, [imageUrls]);

  return { imagesLoaded, loadedCount, total: imageUrls.length };
}
