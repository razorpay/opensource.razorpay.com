type PropsOfHtmlElement<T extends HTMLElement> = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<T>,
  T
>;

interface FilterTagProps extends PropsOfHtmlElement<HTMLDivElement> {
  count?: number;
  isActive?: boolean;
}

const FilterTag = ({ children, count, isActive, ...props }: FilterTagProps) => (
  <div
    className={`flex items-center px-4 py-2 ${
      isActive ? 'bg-blue-600 hover:opacity-80' : 'bg-white hover:opacity-60'
    } ${
      isActive ? 'text-white' : 'text-slate-900'
    } rounded-sm text-sm font-semibold shadow-sm cursor-pointer select-none capitalize transition-opacity`}
    {...props}
  >
    {children}
    {count !== undefined && (
      <span
        className={`w-5 h-5 ml-2 inline-flex items-center justify-center rounded-full ${
          isActive ? 'bg-white' : 'bg-slate-100'
        } text-xxs font-bold ${isActive ? 'text-blue-600' : 'text-slate-900'}`}
      >
        {count}
      </span>
    )}
  </div>
);

export default FilterTag;
