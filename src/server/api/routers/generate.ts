import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { TRPCError } from "@trpc/server";
import { openai } from "@/utils/openai";
import { z } from "zod";

export const aiRouter = createTRPCRouter({
  generate: publicProcedure
    .input(z.object({ prompt: z.string().nullable() }))
    .mutation(async ({ input }) => {
      if (!input.prompt) {
        throw new TRPCError({
          message: "No prompt provided",
          code: "BAD_REQUEST",
        });
      }

      let res;

      try {
        res = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Answer the given question" },
            { role: "user", content: input.prompt },
          ],
          max_tokens: 50,
          temperature: 0.5,
          top_p: 1,
          presence_penalty: 0.5,
          frequency_penalty: 0.5,
        });
      } catch (err) {
        console.error(err);
        throw new TRPCError({
          message: "Error generating response",
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      return res.data.choices[0]?.message;
    }),
});
