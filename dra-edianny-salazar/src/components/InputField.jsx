export function InputField({ label, type = "text", id, placeholder, required = false, value, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full box-border px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-slate-900 text-sm transition"
      />
    </div>
  );
}