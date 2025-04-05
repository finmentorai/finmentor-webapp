declare module '@/components/ui/skeleton' {
  export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

declare module '@/components/ui/alert' {
  import { VariantProps } from 'class-variance-authority'
  import { alertVariants } from '@/components/ui/alert'

  export interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof alertVariants> {}

  export const Alert: React.ForwardRefExoticComponent<AlertProps>
  export const AlertTitle: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLHeadingElement>
  >
  export const AlertDescription: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement>
  >
}

declare module '@/components/ui/card' {
  export const Card: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
  >
  export const CardHeader: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
  >
  export const CardFooter: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
  >
  export const CardTitle: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLHeadingElement>
  >
  export const CardDescription: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement>
  >
  export const CardContent: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
  >
}
