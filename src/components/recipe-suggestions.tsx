'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { getRecipeSuggestionsAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface RecipeSuggestionsProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  vegetables: string[];
}

export default function RecipeSuggestions({ isOpen, onOpenChange, vegetables }: RecipeSuggestionsProps) {
  const [recipes, setRecipes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRecipes = useCallback(async () => {
    if (vegetables.length === 0) {
      setError("No vegetables in cart to suggest recipes for.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    const result = await getRecipeSuggestionsAction({ vegetables });
    
    if (result.error) {
      setError(result.error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    } else if (result.recipes) {
      setRecipes(result.recipes);
    }
    
    setIsLoading(false);
  }, [vegetables, toast]);

  useEffect(() => {
    if (isOpen) {
      fetchRecipes();
    }
  }, [isOpen, fetchRecipes]);

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-headline text-2xl">AI Recipe Ideas</AlertDialogTitle>
          <AlertDialogDescription>
            Based on the vegetables in your cart, here are a few simple recipe ideas you might enjoy!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-4 min-h-[150px]">
          {isLoading && (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-2">Generating delicious ideas...</p>
            </div>
          )}
          {error && !isLoading && (
            <div className="text-destructive text-center p-4 border border-destructive/50 rounded-md">
              <p>{error}</p>
            </div>
          )}
          {!isLoading && !error && recipes.length > 0 && (
            <ul className="space-y-2 list-disc list-inside bg-secondary/50 p-4 rounded-md">
              {recipes.map((recipe, index) => (
                <li key={index}>{recipe}</li>
              ))}
            </ul>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
