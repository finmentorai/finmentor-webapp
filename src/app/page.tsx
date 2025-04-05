import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="rounded-full bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <PageWithAppbar>
      <div className="relative overflow-hidden">
        {/* Hero content */}
        <div className="container relative space-y-16 py-20 md:py-32">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Master Finance Through
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                {' '}
                Interactive Learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover financial concepts, earn rewards, and connect with
              leading tech companies through our innovative learning platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/learn">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={BookOpen}
              title="Interactive Learning"
              description="Learn through engaging modules and real-world examples tailored to your level"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Track Progress"
              description="Monitor your learning journey and earn rewards for your achievements"
            />
            <FeatureCard
              icon={Users}
              title="Connect & Grow"
              description="Engage with a community of learners and industry experts"
            />
          </div>
        </div>
      </div>
    </PageWithAppbar>
  )
}
