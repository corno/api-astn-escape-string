import * as pt from "pareto-core-types"

export type FEscapeString = (
    $: {
        readonly "str": string,
        readonly "escapeTabsAndNewLines": boolean
        readonly "wrapperToEscape": null | string
    }
) => string


export type FEscapeMultilineString = (
    $: {
        readonly "lines": pt.Array<string>
        readonly "indentation": string
    }
) => string
