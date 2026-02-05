"use client";

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Img14 } from "@/public/assets/images";
import { Star, Navigation, Clock } from "lucide-react";
import Link from "next/link";

const ChurchMap = () => {
  const places = [
    {
      id: 1,
      name: "LightCity Church",
      label: "Church",
      category: "Church",
      image: Img14,
      lng: 7.486931607410156,
      lat: 6.420925507673205,
      reviews: 13,
      hours: "9:00 AM - 5:00 PM",
      rating: 5.0,
      url: "https://www.google.com/maps/place/LightCity+Church/@6.4207336,7.4840509,17z/data=!4m6!3m5!1s0x1044a194ae359ad7:0x9b96dca3bf9c316c!8m2!3d6.4207336!4d7.4866312!16s%2Fg%2F11nmj129jk?authuser=0&entry=ttui",
    },
  ];

  if(navigator.geolocation){
    
  }

  return (
    <Card className="w-full h-[400px] p-0 overflow-hidden rounded-md relative">
      <Map center={[7.525, 6.425]} zoom={11}>
        <MapControls
          showLocate
          showFullscreen
          showZoom
          className="absolute bottom-4 left-4"
        />
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent>
              <div className="relative flex size-5">
                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-200 opacity-75"></div>
                <div className="relative inline-flex size-5 rounded-full bg-secondary-200 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
              </div>

              <MarkerLabel>{place.label}</MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="p-0 w-[250px]">
              <div className="relative h-32 overflow-hidden rounded-t-md">
                <Image
                  fill
                  src={place.image}
                  alt={place.name}
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {place.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {place.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{place.rating}</span>
                    <span className="text-muted-foreground">
                      ({place.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-3.5" />
                  <span>{place.hours}</span>
                </div>
                <div className="w-full flex gap-2 pt-1">
                  <Link
                    href={place.url}
                    className="block w-full"
                    target="_blank"
                  >
                    <Button
                      size="sm"
                      className="w-full h-8 flex justify-center items-center text-white bg-black"
                    >
                      <Navigation className="size-3.5 mr-.5" />
                      Directions
                    </Button>
                  </Link>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </Card>
  );
};

export default ChurchMap;
