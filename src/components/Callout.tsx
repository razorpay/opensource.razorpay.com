const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white border-t-4 border-blue-600 dark:bg-slate-800">
    <div className="container mx-auto px-4 py-32 text-center ">{children}</div>
  </div>
);

export default Callout;
