import { ComponentProps, splitProps } from "solid-js";

export interface HeaderProps extends ComponentProps<"h1"> {
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    class?: string;
}

function getClass(size?: number): string {
    size = size == undefined ? 6 : size
    if (size === 1) return "text-xl";
    else return `text-${size}xl`;
}

export default function Header(props: HeaderProps) {
    const [local, h1Props] = splitProps(props, ["class"]);
    return (
        <h1
            class={`text m-12 font-bold ${getClass(props.size)} ${local.class || ""}`}
            {...h1Props}
        />
    );
}
