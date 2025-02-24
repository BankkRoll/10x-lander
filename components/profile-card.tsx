"use client";

import { ArrowUpRight, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  twitter: string;
  image: string;
  role: string;
  bio: string;
}

export function ProfileCard({
  name,
  twitter,
  image,
  role,
  bio,
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-input bg-background rounded-lg overflow-hidden max-w-3xl w-96"
    >
      <div className="relative w-full aspect-[5/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={800}
          height={600}
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-background to-transparent" />
      </div>
      <div className="relative px-4">
        <div className="flex justify-between items-end -mt-10 mb-4">
          <div />
          <Link
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Twitter className="h-4 w-4" />
              Follow
            </Button>
          </Link>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-red-500 text-sm mb-3">{role}</p>
        <p className="text-gray-300 text-sm mb-4">{bio}</p>
      </div>
    </motion.div>
  );
}
