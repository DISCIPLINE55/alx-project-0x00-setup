import Card from '@/components/Card'
import Button from '@/components/Button'

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" styles="rounded-sm" />
      <Button title="Large" styles="rounded-lg" />
      <Button title="Full" styles="rounded-full" />
    </div>
  )
}
export default Landing