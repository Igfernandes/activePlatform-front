export type SetQueriesProps = {
    url: string;
    query?: object;
}

export type SetParamsProps = {
    url: string;
    data?: object;
};

export function useRoutes() {
    function setQueries({url, query}: SetQueriesProps) {
        let queryCurrent = '';
        if (query) {
            Object.entries(query).forEach(([label, value]) => {
                if (typeof value != 'undefined' || value != null) queryCurrent += `${label}=${value}&`;
            });
        }

        return `${url}?${queryCurrent.slice(0, -1)}`;
    }

    function setParams({url, data}: SetParamsProps) {
        let urlWithParam = url;

        if (data && Object.keys(data).length > 0) {
            Object.entries(data).forEach(([label, value]) => {
                urlWithParam = value
                    ? urlWithParam.replaceAll(`{${label}}`, value)
                    : urlWithParam.replaceAll(`{${label}}`, '');
            });
            urlWithParam = urlWithParam.includes('//') ? urlWithParam.replaceAll('//', '/') : urlWithParam;
        }

        // SE AINDA HOUVER ALGUM PARAMETRO QUE NAO FOI SUBSTITUIDO, REMOVER (REMOVE TUDO DENTRO DAS CHAVES INCLUINDO AS CHAVES)
        urlWithParam = urlWithParam.replace(/ *\{[^)]*\} */g, '');

        return urlWithParam;
    }

    return {
        setParams,
        setQueries
    };
}
