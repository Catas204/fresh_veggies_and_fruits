
'use server';

import { suggestRecipes, type SuggestRecipesInput, type SuggestRecipesOutput } from '@/ai/flows/suggest-recipes';
import { z } from 'zod';

const actionSchema = z.object({
  vegetables: z.array(z.string()).min(1, { message: "Please select at least one vegetable." }),
});

export async function getRecipeSuggestionsAction(input: SuggestRecipesInput): Promise<{recipes?: SuggestRecipesOutput['recipes']; error?: string}> {
  const parsedInput = actionSchema.safeParse(input);

  if (!parsedInput.success) {
    const errorMessage = parsedInput.error.errors.map(e => e.message).join(', ');
    return { error: errorMessage };
  }

  try {
    const result = await suggestRecipes(parsedInput.data);
    if (!result || !result.recipes || result.recipes.length === 0) {
        return { error: "Could not find any recipes for the selected vegetables." };
    }
    return { recipes: result.recipes };
  } catch (error) {
    console.error('Error getting recipe suggestions:', error);
    return { error: 'An unexpected error occurred while fetching recipe suggestions.' };
  }
}
