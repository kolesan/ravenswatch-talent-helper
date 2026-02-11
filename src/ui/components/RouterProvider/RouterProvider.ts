import { html } from "htm/preact";
import { ComponentChildren, createContext } from "preact";
import { useContext, useState } from "preact/hooks";

import { useInitRouter } from "./hooks/useInitRouter/useInitRouter";

type Props = {
    children: ComponentChildren;
}

const Context = createContext<string | undefined>(undefined);

export function RouterProvider({
    children,
}: Props) {
    const [loc, setLoc] = useState<string | undefined>(location.pathname);

    useInitRouter({ 
        onLocationChange: location => {
            console.log("location changed", { url: location });
            setLoc(location);
        }
    });

    return html`
        <${Context.Provider}
            value=${loc}
        >
            ${children}
        </${Context.Provider}>
    `;
}

export function useRouter() {
    const context = useContext(Context);
    if (!context) {
        throw new Error(
            "useRouter hook used outside of <RouterProvider />"
        );
    }
    return context;
}
