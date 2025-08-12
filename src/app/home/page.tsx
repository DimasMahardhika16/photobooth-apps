"use client";

import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconCamera } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "@/src/header.module.css";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/payment");
  };

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

      <Container size="xl" mb="lg">
        <Box>
          <Card
            shadow="md"
            padding="lg"
            radius="md"
            withBorder
            style={{
              backgroundImage: `linear-gradient(to right, var(--mantine-color-senja-4) 0%, transparent 50%),
              linear-gradient(to left, var(--mantine-color-senja-4) 0%, transparent 50%)`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <SimpleGrid cols={3} spacing="lg">
              <Flex justify="center" align="center">
                <Image src="/pbt2.jpg" alt="PhotoBooth Reference1" w={280} />
              </Flex>
              <Flex
                justify="center"
                direction="column"
                ta="center"
                align="center"
              >
                <Title fz="h1" fw={700}>
                  Welcome to Ruang Senja
                </Title>
                <Text fw={600} mt={15}>
                  Capture the special moment with your friends, family, and
                  someone special you loved
                </Text>
                <Button
                  variant="filled"
                  color="senja"
                  radius="lg"
                  w={200}
                  mt={20}
                  fz="lg"
                  onClick={handleStart}
                >
                  Start <IconCamera stroke={1.5} style={{ marginLeft: 10 }} />
                </Button>
              </Flex>
              <Flex justify="center" align="center">
                <Image src="/pbt1.jpg" alt="PhotoBooth Reference" w={350} />
              </Flex>
            </SimpleGrid>
          </Card>
        </Box>
      </Container>

      <Container size="xl" mb="lg">
        <Box>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            style={{
              backgroundImage: `linear-gradient(to right, var(--mantine-color-senja-4) 0%, transparent 50%), 
                linear-gradient(to left, var(--mantine-color-senja-4) 0%, transparent 50%)`,
            }}
            withBorder
          >
            <Carousel
              withIndicators
              height={300}
              slideSize="100%"
              slideGap="md"
              controlsOffset="sm"
              controlSize={30}
              withControls
              emblaOptions={{ loop: true, dragFree: false, align: "center" }}
            >
              {["/pr1.jpg", "/pr2.jpg", "/pr3.jpg", "/pr4.jpg", "/pr5.jpg"].map(
                (src) => (
                  <Carousel.Slide key={src}>
                    <Image src={src} alt={src} height={300} fit="contain" />
                  </Carousel.Slide>
                )
              )}
            </Carousel>
          </Card>
        </Box>
      </Container>
    </>
  );
}
