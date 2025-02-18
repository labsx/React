import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/RouteComponent')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/RouteComponent"!</div>
}
