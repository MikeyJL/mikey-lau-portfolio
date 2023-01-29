"use client";
import { useEffectOnce } from "react-use";
import {
  clampDimensions,
  convertToGrayScales,
  getCharacterForGrayScale,
} from "../helpers";

const ProfileImage = () => {
  // Sets up ASCII image
  useEffectOnce(() => {
    const canvas = document.getElementById(
      "profile-image"
    ) as HTMLCanvasElement;
    const asciiImage = document.getElementById("ascii-profile");

    const context = canvas.getContext("2d");

    if (!canvas || !asciiImage || !context) return;

    const image = new Image();
    image.src = "/profile.png";
    image.onload = () => {
      const [width, height] = clampDimensions(image.width, image.height);

      canvas.width = width;
      canvas.height = height;

      context.drawImage(image, 0, 0, width, height);
      const grayScales = convertToGrayScales(context, width, height);

      const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
        let nextChars = getCharacterForGrayScale(grayScale);
        if ((index + 1) % width === 0) {
          nextChars += "\n";
        }

        return asciiImage + nextChars;
      }, "");

      asciiImage.textContent = ascii;
    };
  });

  return (
    <>
      <canvas id="profile-image" className="hidden" />
      <pre
        id="ascii-profile"
        className="w-fit text-[6px] bg-black text-neutral-300 leading-none tracking-[-1px]"
      />
    </>
  );
};

export default ProfileImage;
