import { GRAYSCALE_RAMP, MAXIMUM_HEIGHT, MAXIMUM_WIDTH } from "../constants";

export const toGrayScale = (r: number, g: number, b: number) =>
	0.21 * r + 0.72 * g + 0.07 * b;

export const getFontRatio = () => {
	const pre = document.createElement("pre");
	pre.style.display = "inline";
	pre.textContent = " ";

	document.body.appendChild(pre);
	const { width, height } = pre.getBoundingClientRect();
	document.body.removeChild(pre);

	return height / width;
};

export const clampDimensions = (width: number, height: number) => {
	const rectifiedWidth = Math.floor(getFontRatio() * width);

	if (height > MAXIMUM_HEIGHT) {
		const reducedWidth = Math.floor((rectifiedWidth * MAXIMUM_HEIGHT) / height);
		return [reducedWidth, MAXIMUM_HEIGHT];
	}

	if (width > MAXIMUM_WIDTH) {
		const reducedHeight = Math.floor((height * MAXIMUM_WIDTH) / rectifiedWidth);
		return [MAXIMUM_WIDTH, reducedHeight];
	}

	return [rectifiedWidth, height];
};

export const getCharacterForGrayScale = (grayScale: number) => {
	const rampLength = GRAYSCALE_RAMP.length;

	return GRAYSCALE_RAMP[Math.ceil(((rampLength - 1) * grayScale) / 255)];
};

export const convertToGrayScales = (
	context: CanvasRenderingContext2D,
	width: number,
	height: number
) => {
	const imageData = context.getImageData(0, 0, width, height);

	const grayScales = [];

	for (let i = 0; i < imageData.data.length; i += 4) {
		const r = imageData.data[i];
		const g = imageData.data[i + 1];
		const b = imageData.data[i + 2];

		const grayScale = toGrayScale(r, g, b);
		imageData.data[i] =
			imageData.data[i + 1] =
			imageData.data[i + 2] =
				grayScale;

		grayScales.push(grayScale);
	}

	context.putImageData(imageData, 0, 0);

	return grayScales;
};
