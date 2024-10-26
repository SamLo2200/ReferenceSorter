import DymanicTable from "@/components/DymanicTable";
import TableController from "@/components/TableController";

export default function Home() {
    return (
        <main className="flex justify-center items-center mx-20 my-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6">
                <div className="flex flex-col gap-1 lg:col-span-2">
                    <p className="text-4xl font-bold place-self-start lg:col-span-2">
                        Citation Sorter
                    </p>
                    <p className="my-4">
                        A tool to sort English reference list according to APA
                        standard
                    </p>

                    <hr></hr>
                    <p className="mt-4 text-slate-500">
                        Developed by{" "}
                        <a className="" href="https://github.com/SamLo2200">
                            Sam Lo
                        </a>
                    </p>
                    <p className="text-slate-500 underline underline-offset-4">
                        <a href="https://github.com/SamLo2200/ReferenceSorter">
                            Source Code
                        </a>
                    </p>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                    {/* <DymanicTable /> */}
                    <TableController />
                </div>
            </div>
        </main>
    );
}
