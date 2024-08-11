export class SelectData {
    label!: string;
    options!: { label: string; value: any; icon: string; img: string }[];
    callback!: (opt: string) => any;
}