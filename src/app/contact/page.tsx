"use client";

import {
  ActionIcon,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import classes from "@/src/header.module.css";
import Link from "next/link";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconLocation,
  IconLocationPin,
  IconMail,
  IconMapSearch,
} from "@tabler/icons-react";

export default function Contact() {
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
          <Card shadow="md" padding="lg" radius="md" withBorder mb={25}>
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

      <Container size="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Box>
            <Flex justify="center" direction="row" gap={"lg"}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  backgroundImage: `linear-gradient(to bottom, var(--mantine-color-senja-4) 0%, transparent 65%)`,
                }}
              >
                <Title>Kontak Kami</Title>
                <Text ta="justify" mt={15} mb={15}>
                  Apabila terdapat pertanyaan, saran / masukan, dan kendala bisa
                  langsung kontak kami dengan mengisi pesan disamping melalui
                  email atau dapat menghubungi melalui nomor whatsapp yang
                  tertera dibawah. Jangan Lupa follow instagram kami
                  @Ruang_Senja25
                </Text>
                <Flex justify="center" direction="column">
                  <Box>
                    <Flex
                      gap="md"
                      justify="flex-start"
                      align="center"
                      direction="row"
                      wrap="wrap"
                      my="sm"
                    >
                      <ActionIcon variant="filled" size="xl" radius="xl">
                        <IconMapSearch size={25} />
                      </ActionIcon>
                      <Text>Bandung, Jawa Barat, Indonesia</Text>
                    </Flex>
                    <Flex
                      gap="md"
                      justify="flex-start"
                      align="center"
                      direction="row"
                      wrap="wrap"
                      my="sm"
                    >
                      <ActionIcon variant="filled" size="xl" radius="xl">
                        <IconMail size={25} />
                      </ActionIcon>
                      <Text>ruangsenja25@gmail.com</Text>
                    </Flex>
                    <Flex
                      gap="md"
                      justify="flex-start"
                      align="center"
                      direction="row"
                      wrap="wrap"
                      my="sm"
                    >
                      <ActionIcon variant="filled" size="xl" radius="xl">
                        <IconBrandWhatsapp size={25} />
                      </ActionIcon>
                      <Text>085234667821</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
            </Flex>
          </Box>
          <Box>
            <Card
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                backgroundImage: `linear-gradient(to bottom, var(--mantine-color-senja-4) 0%, transparent 65%)`,
              }}
            >
              <Input.Wrapper label="Nama" size="md" mt="md">
                <Input placeholder="Nama anda" />
              </Input.Wrapper>
              <Input.Wrapper label="Email" size="md" mt="md">
                <Input placeholder="Email anda" />
              </Input.Wrapper>
              <Textarea
                minRows={4}
                maxRows={6}
                autosize
                mt="md"
                label="Pesan"
                placeholder="Masukkan pesan anda disini"
              />

              <Center>
                <Button variant="filled" size="md" radius="xl" mt="md">
                  Kirim Pesan{" "}
                  <IconBrandTelegram size={25} style={{ marginLeft: 10 }} />
                </Button>
              </Center>
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
