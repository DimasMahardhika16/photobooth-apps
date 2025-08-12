"use client";

import {
  Container,
  Box,
  Card,
  Flex,
  Group,
  Title,
  Text,
  Center,
} from "@mantine/core";
import Link from "next/link";
import classes from "@/src/header.module.css";

export default function PrivasiPage() {
  return (
    <>
      <header className={classes.header}>
        <Container>
          <Center>
            <div className={classes.inner}>
              <Text>Follow us on Instagram @Ruang_Senja25</Text>
            </div>
          </Center>
        </Container>
      </header>

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
                <Link href="/about" className={classes.link}>
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

      <Container size="xl" my={100}>
        <Box>
          <Center>
            <Title fz="h2">Kebijakan Privasi</Title>
          </Center>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            mt={15}
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--mantine-color-senja-4) 0%, transparent 65%)`,
            }}
          >
            <Text fz="lg" ta="justify">
              Keamanan Privasi anda sangat penting! Maka dari itu, Ruang Senja
              tidak menyimpan, mengumpulkan dan membagikan foto-foto pelanggan,
              karena sistem kami jika telah melakukan foto, maka akan dikirim
              atau bisa langsung scan barcode untuk mengunduhnya dan apabila
              sudah terunduh maka otomatis terhapus dari sistem kami.
            </Text>
          </Card>
        </Box>
      </Container>
    </>
  );
}
