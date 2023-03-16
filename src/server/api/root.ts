import { aiRouter } from "@/server/api/routers/generate";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  ai: aiRouter,
});

export type AppRouter = typeof appRouter;
