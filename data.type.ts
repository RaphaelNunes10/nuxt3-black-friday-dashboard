export type Summary = {
    today: {
        revenues: number;
        tickets: number;
    };
    yesterday: {
        revenues: number;
        tickets: number;
    };
};

export type RankingItem = {
    id: number;
    store_name: string;
    total: number;
};

export type Transaction = {
    id: number;
    store_name: string;
    total: number;
    date: string;
};

export type Data = {
    summary: Summary;
    revenues_ranking: RankingItem[];
    tickets_ranking: RankingItem[];
    transactions: Transaction[];
}