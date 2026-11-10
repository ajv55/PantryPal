import { z } from "zod";

export const createPantryItemSchema = z.object({
    name: z.string().trim().min(1).max(80),
    category: z.enum(['Produce', 'Dairy & Eggs', 'Meat & Seafood', 'Pantry Staples', 'Frozen', 'Household', 'Other']),
    quantity: z.number().nonnegative().finite(),
    unit: z.enum(['item', 'pack', 'g', 'kg', 'oz', 'lb', 'ml', 'l']),
    expirationDate: z.iso.date().optional(),
    lowStockThreshold: z.number().finite().nonnegative().optional()
})


export type CreatePantryItemInput = z.infer<typeof createPantryItemSchema>