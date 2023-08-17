import {IconProps, IconTemplate} from "~/components/icons";

export function VsCopy(props: IconProps) {
    return IconTemplate({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path fill-rule="evenodd" d="m4 4 1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3-3-3H5v10h8V7z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3 1 2 2v10l1 1V2h6.414l-1-1H3z" clip-rule="evenodd"/>'
    }, props)
}

export function VsLinkExternal(props: IconProps) {
    return IconTemplate({
        a: {"fill":"currentColor","viewBox":"0 0 16 16"},
        c: '<path d="M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"/><path d="M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"/>'
    }, props)
}
