import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { getAssetPath } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="px-12 w-full max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-0 shadow-none overflow-hidden group">
                  <CardContent className="flex flex-col aspect-[3/4] items-center justify-center p-0 relative rounded-xl overflow-hidden border-2 border-border/50 group-hover:border-highlight/50 transition-colors">
                    <img 
                      src={getAssetPath(image.src)} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-background/80 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-serif italic text-center text-foreground">{image.caption}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-highlight/50 text-highlight hover:bg-highlight hover:text-background" />
        <CarouselNext className="border-highlight/50 text-highlight hover:bg-highlight hover:text-background" />
      </Carousel>
    </div>
  );
}
