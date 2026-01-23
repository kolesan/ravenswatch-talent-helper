const queryParam = "compendium-view" as const;

export const allTalentsViewState = {
    enabled: false,
    queryParam,
    searchParams(enabled: boolean) {
        return enabled ? `?${queryParam}=true` : "";
    } 
}
