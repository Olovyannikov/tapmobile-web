export interface IPageData {
    data: {
        about?: {
            title: string;
            text?: string;
        };
        reasons?: {
            list?: {
                id: number;
                text: string
            }
            subtitle?: string;
        }
    }
}
