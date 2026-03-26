import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import appDataJson from "../../app.json";

export const useApps = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { data: allApps, isLoading, isError, error } = useQuery({
        queryKey: ["apps"],
        queryFn: async () => {
            // Mocking a fetch delay for realistic feel
            return new Promise((resolve) => {
                setTimeout(() => resolve(appDataJson), 500);
            });
        }
    });

    const filteredApps = useMemo(() => {
        if (!allApps) return [];
        if (!searchTerm) return allApps;
        
        const term = searchTerm.toLowerCase();
        return allApps.filter(app => 
            app.title.toLowerCase().includes(term) || 
            app.companyName.toLowerCase().includes(term)
        );
    }, [allApps, searchTerm]);

    return {
        apps: filteredApps,
        totalCount: allApps?.length || 0,
        resultsCount: filteredApps.length,
        searchTerm,
        setSearchTerm,
        isLoading,
        isError,
        error
    };
};
