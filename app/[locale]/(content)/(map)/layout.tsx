export default function MapsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col py-8 px-2 md:px-4">
      <main className="mx-auto w-full max-w-[1400px]">
        {children}
      </main>
    </div>
  )
}
