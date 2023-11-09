import ClockTime from "@/app/component/01/ClockTime";
export default function ClockPage() {

  console.log("ClockPage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      CLOCK불러올거임
      <ClockTime/>
    </main>
  )
}
