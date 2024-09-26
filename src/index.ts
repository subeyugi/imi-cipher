import renderHtml from "./renderHtml";
import getDecipherFromSongId from "./search";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { results } = await env.DB.prepare(
			"SELECT * FROM songs;"
		).all();
		getDecipherFromSongId(env, [1, 2, 3]);
		return new Response(
			renderHtml(env, results), {
				headers:{"content-type": "text/html"}
			}
		);
	},
} satisfies ExportedHandler<Env>;