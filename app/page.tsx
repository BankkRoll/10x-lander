"use client";

import { FaTwitch, FaXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ProfileCard } from "@/components/profile-card";
import { StreamEmbed } from "@/components/stream-embed";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black">
      <main className="px-4 pb-12 md:pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-96 mx-auto mb-6"
          >
            <Image
              src="/pmf-or-die.png"
              alt="PMF OR DIE"
              width={600}
              height={200}
              priority
              className="object-cover"
            />
          </motion.div>
          <p className="mt-4 text-xl text-muted-foreground">
            $25K to $1M in 90 days. No distractions. Just execution.
          </p>

          {/* Stream Section */}
          <div className="max-w-5xl mx-auto py-6">
            <StreamEmbed />
          </div>

          {/* Countdown Section */}
          <div className="py-6">
            <CountdownTimer />
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl border border-input bg-background p-6 rounded-md">
              PMF or Die is an experiment to show what's possible when you lock
              2 builders in an apartment with $25K, an internet connection, and
              just 90 days to build a $1 million dollar business.
            </p>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Meet the Players
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <ProfileCard
              name={"BLAKE ANDERSON"}
              bio="" // TODO: add bios if you want? already ready to implement
              twitter="https://x.com/blakeandersonw"
              image="/blake-anderson.png"
              role="Founder"
            />
            <ProfileCard
              name={`PATRICK "PATTY" CALLAWAY`}
              bio="" // TODO: add bios if you want? already ready to implement
              twitter="https://x.com/pattybuilds"
              image="/patrick-callaway.png"
              role="Co-Founder"
            />
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              Follow the Journey
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link
                href="https://x.com/pmfordie"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button variant="outline" className="gap-2">
                  <FaXTwitter className="h-5 w-5" />
                  Twitter
                </Button>
              </Link>
              <Link
                href="https://www.youtube.com/@PMFOrDie"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button variant="outline" className="gap-2">
                  <FaYoutube className="h-5 w-5" />
                  YouTube
                </Button>
              </Link>
              <Link
                href="https://www.twitch.tv/pmfordie"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button variant="outline" className="gap-2">
                  <FaTwitch className="h-5 w-5" />
                  Twitch
                </Button>
              </Link>
            </div>
            {/* TODO: READY TO IMPLEMENT TBPN LINK */}
            {/* <Link
              href="https://x.com/tbpn"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button variant="outline">
                TBPN
              </Button>
            </Link> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="px-4 py-6 flex flex-col items-center gap-4">
          <motion.p
            className="text-gray-500 text-xs sm:text-sm text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            PMF or Die is a{" "}
            <a
              href="https://tbpn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              TBPN
            </a>{" "}
            production. For press or other inquiries, reach out to{" "}
            <a
              href="mailto:jordi@tbpn.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              jordi@tbpn.com
            </a>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
