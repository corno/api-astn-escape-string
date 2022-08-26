
export type EscapeString = (
    $: {
        str: string,
        escapeTabsAndNewLines: boolean,
        wrapperToEscape: string | null,
    }
) => string


export type EscapeMultilineString = (
    $: {
        lines: string[],
        indentation: string,
    }
) => string
