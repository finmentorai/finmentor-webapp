import { z } from 'zod'

// Auction Creation Schema
export const AuctionCreateSchema = z
  .object({
    creatorId: z.string().uuid('Invalid creator ID'),
    termId: z.string().uuid('Invalid term ID').optional(),
    newsId: z.string().uuid('Invalid news ID').optional(),
    dailyBudget: z.number().min(0, 'Daily budget must be non-negative'),
    totalBudget: z.number().min(1, 'Total budget must be positive'),
    endDate: z.date().optional(),
  })
  .refine(
    (data) => data.termId || data.newsId,
    'Must specify either a term or news item for the auction',
  )

// Bid Placement Schema
export const BidPlacementSchema = z.object({
  bidderId: z.string().uuid('Invalid bidder ID'),
  auctionId: z.string().uuid('Invalid auction ID'),
  amount: z.number().min(0.01, 'Bid amount must be positive'),
  maxBid: z.number().optional(),
  termId: z.string().uuid('Invalid term ID').optional(),
  newsId: z.string().uuid('Invalid news ID').optional(),
})

// Validation Utility Functions
export function validateAuctionCreation(data: unknown) {
  return AuctionCreateSchema.parse(data)
}

export function validateBidPlacement(data: unknown) {
  return BidPlacementSchema.parse(data)
}

// Error Handling Middleware (for API routes)
export function handleValidationError(error: z.ZodError) {
  const formattedErrors = error.errors.map((err) => ({
    path: err.path.join('.'),
    message: err.message,
  }))

  return {
    success: false,
    errors: formattedErrors,
  }
}
