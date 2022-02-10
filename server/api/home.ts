import { useQuery } from "h3";
import locales from "locales.json";
import { contentHomeMapper } from "server/mappers/ContentHomeMapper";
import { getLocaleStringOrDefault } from "lib/utils/locales";

const getPathStringOrDefault = (path: string | string[] | undefined) => {
    if (typeof path === "string") {
        return path;
    }

    return "/";
};

export default async (req, res) => {
    const { path, locale } = useQuery(req);

    return await contentHomeMapper(
        getPathStringOrDefault(path),
        getLocaleStringOrDefault(locale),
        locales
    );
};