import { serve } from "https://deno.land/std@0.54.0/http/server.ts";

const server = serve({ port: 4000 });

for await (const req of server) {
  console.log("Servidor rodando em http://localhost:4000/");
  req.respond({ body: "Hello World!!" });
}
