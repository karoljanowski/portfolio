'use client'

import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean | null>(null);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
    }, [matches, query]);
    return matches;
}

export default useMediaQuery;