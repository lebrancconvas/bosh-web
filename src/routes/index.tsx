import { Title } from 'solid-start'
import Counter from '~/components/Counter'

export default function Home() {
  return (
    <main>
      <Title>Bangkok Open Source Hackathon</Title>
      <Counter />
      <div class="flex h-screen justify-center">
        <h1 class="text-3xl font-thin">Bangkok Open Source Hackathon</h1>
      </div>
    </main>
  )
}
