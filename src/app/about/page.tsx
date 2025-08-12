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

export default function AboutPage() {
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
            <Title fz="h2" mb={15}>
              Tentang
            </Title>
          </Center>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            mb={25}
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--mantine-color-senja-4) 0%, transparent 75%)`,
            }}
          >
            <Flex justify="flex-start" align="flex-start" direction="column">
              <Title fz="h3">Ruang Senja Photo Booth</Title>
              <Text fz="lg" ta="justify" mt={15}>
                Didirikan sejak Agustus 2025. Ruang Senja Photo Booth
                menyediakan jasa Photo Booth. Tersedia berbagai frame dengan 1-6
                pose. Untuk file foto dapat diunduh melalui link google drive
                yang dikirim ke email atau ingin melakukan pengunduhan sendiri
                melalui scan QR Barcode.
              </Text>
            </Flex>
          </Card>
        </Box>
      </Container>
    </>
  );
}
