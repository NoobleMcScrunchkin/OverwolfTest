import React from "react";

function ToggleSwitch({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="select-none grow">{label}</span>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={enabled}
        onChange={onToggle}
      />
      <div className="relative w-9 h-5 bg-zinc-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
    </label>
  );
}

export default ToggleSwitch;
