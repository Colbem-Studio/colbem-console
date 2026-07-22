export async function GET() {
  return Response.json({
    status: "ok",
    service: "colbem-console",
    timestamp: Date.now(),
  });
}