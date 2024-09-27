import { ChangeEvent } from "react";

interface LabeledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string 
}

export const InputBox = ({ label, placeholder, onChange, type}: LabeledInputType) => {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} type={type || "text"} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
}