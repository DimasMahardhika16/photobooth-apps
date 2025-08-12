let paymentStatus = {
  paid: false,
  startTime: Date.now(),
};

export async function GET() {
  const elapsed = Date.now() - paymentStatus.startTime;

  // Simulasikan pembayaran berhasil setelah 10 detik
  if (elapsed > 10000) {
    paymentStatus.paid = true;
  }

  return Response.json({ paid: paymentStatus.paid });
}
