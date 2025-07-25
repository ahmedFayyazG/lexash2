
export default function getCroppedImg(imageSrc: string, pixelCrop: any): Promise<string> {
    const image = new Image();
    image.src = imageSrc;

    return new Promise((resolve) => {
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(
                image,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height
            );
            resolve(canvas.toDataURL("image/png"));
        };
    });
}
