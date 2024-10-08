import renderHtml from "./renderHtml";
import getDecipherFromSongIds from "./search";
import renderHtmlPost from "./postHtml";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { pathname } = new URL(request.url);
		if(pathname == "/submit"){
			return new Response("post finished!!!");
		}

		return new Response(
			renderHtmlPost() ,{
				headers:{"content-type": "text/html"}
			}
		);
	},
} satisfies ExportedHandler<Env>;