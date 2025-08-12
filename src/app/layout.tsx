import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Ruang Senja",
  description: "Prototype PhotoBooth Apps by Dimas Mahardhika",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{
            colors: {
              senja: [
                "#fff5f0",
                "#ffe0cc",
                "#ffb399",
                "#ff8566",
                "#ff5733",
                "#e64d29", // <-- warna utama (senja)
                "#b34020",
                "#802d17",
                "#4d1a0e",
                "#1a0705",
              ],
            },
            primaryColor: "senja", // <-- pakai ini di <Button color="senja" />
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
