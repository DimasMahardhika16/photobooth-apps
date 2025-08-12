"use client";

import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentPage() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/payment/check");
      const data = await res.json();
      if (data.paid) {
        clearInterval(interval);
        router.push("/camera");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container size="xl">
      <Box>
        <Flex direction="column" align="center" justify="center" ta="center">
          <Card shadow="sm" padding="lg" radius="md" withBorder mt={20}>
            <Title>Silakan Scan QR untuk melakukan Pembayaran</Title>
            <Flex justify="center" direction="column" mt={10}>
              <Center>
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/payment"
                  alt="QR Code Payment"
                  w={250}
                />
              </Center>
              <Text c="black" fw={600} mt={10}>
                Menunggu Pembayaran...
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Box>
    </Container>
  );
}
