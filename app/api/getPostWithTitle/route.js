import prisma from "@/lib/db";
export async function POST(request) {
    try {
      const body = await request.json(); 

      const data = await prisma.post.findUnique({
        where: {
          postTitle: body.slug,
      },
      });
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch post with specific title data' }), { status: 500 });
    }
}