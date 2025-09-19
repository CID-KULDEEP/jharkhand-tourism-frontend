"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRole } from "@/components/Providers";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Compass, Map, Mountain, Trees, GalleryVerticalEnd, Binoculars, Search, Play } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { t } = useTranslation();
  const { role } = useRole();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40 dark:bg-black/50" />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-3 max-w-2xl text-base opacity-90 md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-md bg-white/90 p-2 text-foreground shadow-lg backdrop-blur dark:bg-background/90"
          >
            <Search className="ml-2 h-5 w-5 text-muted-foreground" />
            <Input className="border-0 focus-visible:ring-0" placeholder={t("hero.placeholder") as string} />
            <Button asChild>
              <Link href="/destinations">{t("common.search")}</Link>
            </Button>
          </motion.div>

          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href={role === "guide" ? "/guide" : role === "admin" ? "/admin" : "/tourist"}>
                {t("hero.cta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation tiles */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { href: "/destinations", label: t("tiles.nature"), Icon: Trees },
            { href: "/destinations", label: t("tiles.heritage"), Icon: GalleryVerticalEnd },
            { href: "/destinations", label: t("tiles.adventure"), Icon: Mountain },
            { href: "/destinations", label: t("tiles.wildlife"), Icon: Binoculars },
            { href: "/tourist", label: t("dashboard.tripPlanner"), Icon: Map },
            { href: "/guide", label: t("common.guides"), Icon: Compass },
          ].map(({ href, label, Icon }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href={href}>
                <Card className="h-full transition hover:shadow-md">
                  <CardContent className="flex items-center gap-3 p-5">
                    <Icon className="h-6 w-6" />
                    <div className="font-medium">{label}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AR/VR preview section */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">AR/VR Preview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore immersive previews of Jharkhand's destinations. Walk through valleys and waterfalls virtually before you travel.
            </p>
            <div className="mt-4 flex gap-2">
              <Button asChild>
                <a href="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop" target="_blank" rel="noreferrer">Open Demo</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/destinations">Browse Spots</Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1520975682031-ae6653a26ba3?q=80&w=1600&auto=format&fit=crop"
                alt="AR/VR Preview"
                className="aspect-video w-full object-cover"
              />
              <button className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-foreground shadow flex items-center justify-center">
                <Play className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials slider */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-semibold">{t("testimonials.title")}</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4].map((i) => (
              <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop`}
                        alt="Traveler"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="font-medium">Traveler {i}</div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Netarhat sunrise was magical, and the local cuisine was unforgettable. Highly recommend visiting in winters!
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}