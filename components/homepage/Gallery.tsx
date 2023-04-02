import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import image1 from 'assets/images/image-1.jpg';
import image2 from 'assets/images/image-2.jpg';
import image3 from 'assets/images/image-3.jpg';
import image4 from 'assets/images/image-4.jpg';
import image5 from 'assets/images/image-5.jpg';

interface ImageItem {
    image: StaticImageData;
    alt: string;
    className?: string;
}

const Gallery: FC = () => {
    const images: ImageItem[] = [
        { image: image1, alt: 'Image 1', className: 'rotate-2' },
        { image: image2, alt: 'Image 2', className: '-rotate-2' },
        { image: image3, alt: 'Image 3', className: 'rotate-2' },
        { image: image4, alt: 'Image 4', className: 'rotate-2' },
        { image: image5, alt: 'Image 5', className: '-rotate-2' },
    ];

    return (
        <div className="mt-16 sm:mt-20">
            <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
                {images.map(({ image, alt, className }, idx) => {
                    return (
                        <div
                            className={classNames(
                                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                                className
                            )}
                            key={idx}
                        >
                            <Image
                                src={image.src}
                                alt={alt}
                                width={4240}
                                height={2384}
                                quality={75}
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
