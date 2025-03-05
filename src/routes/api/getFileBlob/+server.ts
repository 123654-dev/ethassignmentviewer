export async function GET({ request, params }): Promise<Response> {
  let fileUrl = "https://example.com";
  const res = await fetch(fileUrl);

  const blob = await res.blob();
  return new Response(blob);
}

export async function POST({ request }): Promise<Response> {
  let { fileUrl } = await request.json();
  const res = await fetch(fileUrl);

  const blob = await res.blob();
  return new Response(blob);
}
