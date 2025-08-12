"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Checkbox,
  ColorInput,
  Container,
  Flex,
  Title,
} from "@mantine/core";

export default function CustomizePage() {
  const router = useRouter();
  const strip =
    typeof window !== "undefined" ? sessionStorage.getItem("strip") : null;
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [timestamp, setTimestamp] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!strip) {
      router.push("/camera");
      return;
    }
    const img = new Image();
    img.src = strip!;
    img.onload = () => renderCanvas(img);
  }, [strip]);

  const renderCanvas = (img: HTMLImageElement) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = img.width + 40;
    const h = img.height + 40;
    canvas.width = w;
    canvas.height = h;
    ctx.fillStyle = borderColor;
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 20, 20);
    if (timestamp) {
      ctx.fillStyle = "#000";
      ctx.font = "20px sans-serif";
      ctx.fillText(new Date().toLocaleString(), 20, h - 20);
    }
  };

  const handleApply = () => {
    const dataUrl = canvasRef.current!.toDataURL("image/jpeg");
    sessionStorage.setItem("strip-final", dataUrl);
    router.push("/select");
  };

  if (!strip) return null;

  return (
    <Container ta={"center"} p={6} mt={10}>
      <Title fz="h2">Customize Strip Foto</Title>
      <canvas
        ref={canvasRef}
        style={{
          margin: "auto",
          marginBottom: 4,
          border: 2,
        }}
      />
      <Flex align="center" justify="center" gap={4} mb={4}>
        <ColorInput
          variant="filled"
          label="Border Color"
          placeholder="Choose Border Color"
          type="color"
          value={borderColor}
          onChange={(value) => setBorderColor(value)}
        />
        <Checkbox
          type="checkbox"
          checked={timestamp}
          onChange={(e) => setTimestamp(e.target.checked)}
          label="Timestamp"
          style={{ marginLeft: 4 }}
        />
      </Flex>
      <Button variant="filled" mt={10} radius="md" onClick={handleApply}>
        Apply & Continue
      </Button>
    </Container>
  );
}
