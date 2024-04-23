/**
 * To call this API route: /api/template/example
 *
 * req parameter is required
 */
export async function GET(
  req: Request,
  { params }: { params: { parameter: string } },
) {
  const { parameter } = params;
  return new Response(`URL Parameter Example: ${parameter}`);
}
