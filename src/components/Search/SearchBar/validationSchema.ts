import { ZodEffects, ZodObject, ZodString, z } from "zod";

export type SearchBarValidationSchema = {
  searchValue: string;
};

export const searchBarValidationSchema: ZodObject<
  Record<keyof SearchBarValidationSchema, ZodEffects<ZodString, string, string>>
> = z.object({
  searchValue: z.string().refine((value) => value.trim() !== ""),
});
