import {ComponentProps, splitProps} from "solid-js";

export interface ButtonProps extends ComponentProps<"button"> {
    class?: string
}

export default function Button(props: ButtonProps) {
    const [local, bProps] = splitProps(props, ["class"]);
    return <button
        class={`text-stone-200 
        mt-0 p-4 
        w-fit 
        rounded-md
        bg-emerald-700 
        hover:scale-[1.03] hover:brightness-105
        transition-all ${local.class || ""}`} {...bProps}/>;
}