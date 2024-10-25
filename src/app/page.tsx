import DymanicTable from "@/components/DymanicTable";

export default function Home() {
  return (
    <main className="flex justify-center items-center mx-20 my-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6">
        <p className="text-4xl font-bold place-self-start text-nowrap lg:col-span-2">
          Citation Sorter
        </p>
        <div className="md:col-span-2 lg:col-span-3">
          <DymanicTable />
        </div>
      </div>
    </main>
  );
}
