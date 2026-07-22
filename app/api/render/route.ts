interface RenderRequestBody {
  channelId: string;
  messageIds: string[];
}

export async function POST(req: Request) {
  let body: RenderRequestBody;

  try {
    body = await req.json();
  } catch {
    return Response.json(
      { code: "INVALID_JSON", message: "Request body must be valid JSON" },
      { status: 400 }
    );
  }

  if (!body.channelId || !Array.isArray(body.messageIds)) {
    return Response.json(
      { code: "INVALID_BODY", message: "channelId and messageIds are required" },
      { status: 400 }
    );
  }

  // TODO: fetch raw messages from DB, run rendering/formatting pipeline,
  // apply RoseGuard moderation results, return rendered output.
  const rendered = body.messageIds.map((id) => ({
    id,
    html: "<p>TODO: rendered content</p>",
  }));

  return Response.json({ channelId: body.channelId, messages: rendered });
}