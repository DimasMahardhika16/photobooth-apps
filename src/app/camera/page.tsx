"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Title,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import Link from "next/link";
import classes from "@/src/header.module.css";

export default function CameraPage() {
  const webcamRef = useRef<any>(null);
  const router = useRouter();
  const [countdown, setCountdown] = useState(0);
  const [started, setStarted] = useState(false);

  const startCountdown = () => {
    setStarted(true);
    let count = 3;
    setCountdown(count);
    const timer = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(timer);
        captureStrip();
      }
    }, 1000);
  };

  const captureStrip = async () => {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push(webcamRef.current.getScreenshot());
      await new Promise((r) => setTimeout(r, 800));
    }
    // build strip di canvas
    const strip = await buildStrip(images);
    sessionStorage.setItem("strip", strip);
    router.push("/customize");
  };

  const buildStrip = async (images: string[]) => {
    // membuat canvas lebar kecil dengan tinggi images.length * tinggi
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    // asumsikan semua images sama ukuran
    img.src = images[0];
    await img.decode();
    const w = img.width;
    const h = img.height;
    canvas.width = w;
    canvas.height = h * images.length;
    for (let i = 0; i < images.length; i++) {
      const im = new Image();
      im.src = images[i];
      await im.decode();
      ctx?.drawImage(im, 0, i * h, w, h);
    }
    return canvas.toDataURL("/image/jpeg");
  };

  return (
    <>
      <Container size="xl" mb="lg">
        <Box>
          <Card shadow="md" padding="lg" radius="md" withBorder mb={25} mt={20}>
            <Flex justify="space-between" align="center" direction="row">
              <Link href="/home" className={classes.link}>
                Ruang Senja
              </Link>
              <Group justify="center" gap="sm">
                <Link href="/home" className={classes.link}>
                  Halaman Utama
                </Link>
                <Link href="/tentang" className={classes.link}>
                  Tentang
                </Link>
                <Link href="/privasi" className={classes.link}>
                  Ketentuan Privasi
                </Link>
                <Link href="/contact" className={classes.link}>
                  Kontak
                </Link>
              </Group>
            </Flex>
          </Card>
        </Box>
      </Container>

      <Container size="xl">
        <Box>
          <Flex justify="center" align="center" direction="column" p={6}>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{ borderRadius: 10, marginTop: 20 }}
            />
            {!started ? (
              <Button
                onClick={startCountdown}
                variant="filled"
                mt={10}
                px={5}
                py={2}
                radius="lg"
                w={150}
              >
                Mulai Foto
              </Button>
            ) : (
              <Title fz="h3" mt={4}>
                {countdown > 0 ? countdown : "…"}
              </Title>
            )}
          </Flex>
        </Box>
      </Container>
    </>
  );
}
