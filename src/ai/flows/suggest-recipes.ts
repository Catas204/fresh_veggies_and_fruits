'use server';

/**
 * @fileOverview Recipe suggestion flow. Allows users to select vegetables and receive recipe suggestions.
 *
 * - suggestRecipes - A function that suggests recipes based on selected vegetables.
 * - SuggestRecipesInput - The input type for the suggestRecipes function.
 * - SuggestRecipesOutput - The return type for the suggestRecipes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRecipesInputSchema = z.object({
  vegetables: z
    .array(z.string())
    .describe('An array of vegetables the user is interested in using.'),
});
export type SuggestRecipesInput = z.infer<typeof SuggestRecipesInputSchema>;

const SuggestRecipesOutputSchema = z.object({
  recipes: z.array(z.object({
    name: z.string().describe('The name of the recipe.'),
    description: z.string().describe('A short, creative, and enticing description of the recipe.'),
    emoji: z.string().describe('An emoji that represents the recipe.'),
  })).describe('An array of suggested recipes.'),
});
export type SuggestRecipesOutput = z.infer<typeof SuggestRecipesOutputSchema>;

export async function suggestRecipes(input: SuggestRecipesInput): Promise<SuggestRecipesOutput> {
  return suggestRecipesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRecipesPrompt',
  input: {schema: SuggestRecipesInputSchema},
  output: {schema: SuggestRecipesOutputSchema},
  prompt: `You are a recipe suggestion bot with a flair for creativity.  Given a list of vegetables,
you will suggest recipes that include those vegetables and a small number
of additional, common ingredients that the user might like to make at home.

For each recipe, provide a fun name, a short, enticing description to inspire the user, and a single emoji that captures the essence of the dish.

Vegetables: {{vegetables}}

Recipes:`,
});

const suggestRecipesFlow = ai.defineFlow(
  {
    name: 'suggestRecipesFlow',
    inputSchema: SuggestRecipesInputSchema,
    outputSchema: SuggestRecipesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
