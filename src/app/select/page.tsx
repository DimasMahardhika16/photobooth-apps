"use client";

import { Container, Box, Flex, Title, Image, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectPage() {
  const router = useRouter();
  const [stripFinal, setStripFinal] = useState<string | null>(null);

  useEffect(() => {
    const s = sessionStorage.getItem("strip-final");
    if (!s) {
      router.push("/camera");
    } else {
      setStripFinal(s);
    }
  }, [router]);

  const handlePrint = async () => {
    await fetch("/api/photo/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ photo: stripFinal }),
    }),
      await fetch("/api/photo/print", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: sessionStorage.getItem("last-filename"),
        }),
      });
    router.push("/print");
  };

  const handleRetry = () => {
    router.push("/camera");
  };

  if (!stripFinal) return null;

  return (
    <>
      <Container size="xl" my={30}>
        <Box ta="center" p={6}>
          <Title fz="h3" mb={4}>
            Preview Strip Foto
          </Title>
          {/* <Image src="/" alt="Preview Strip" /> */}
          <Flex gap={10} justify="center" mt={20}>
            <Button
              variant="filled"
              radius="md"
              color="Green"
              onClick={handlePrint}
            >
              Cetak
            </Button>
            <Button
              variant="filled"
              radius="md"
              color="Red"
              onClick={handleRetry}
            >
              Ulangi
            </Button>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
