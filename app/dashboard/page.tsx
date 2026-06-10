import { lusitana } from "../ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col h-38 md:h-52 gap-4 shrink-0 rounded-lg bg-blue-500 p-4">
        <p className={`${lusitana.className} text-white text-3xl font-bold`}>
          Dashboard Page
        </p>
        <p className="text-slate-100 text-sm md:text-base">
          Here is the dashboard page you have been looking for all this while.
          Make sure you make a good use of it
        </p>
      </div>
    </main>
  );
}
