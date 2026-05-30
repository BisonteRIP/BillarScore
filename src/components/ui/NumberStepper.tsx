import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NumberStepperProps {
  min?: number;
  max?: number;
  initialValue?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export function NumberStepper({
  min = 0,
  max = 100,
  initialValue = 15,
  step = 1,
  onChange,
  disabled = false,
  className,
}: NumberStepperProps) {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      const clampedValue = Math.min(max, Math.max(min, newValue));
      setValue(clampedValue);
      onChange?.(clampedValue);
    }
  };

  return (
    <div className="flex items-center">
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={cn("w-full text-center", className)}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}
