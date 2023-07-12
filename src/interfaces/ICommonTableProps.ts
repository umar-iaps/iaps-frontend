export interface ICommonTableProps {
  tableContent: any[];
  tableHeadingData: { [key: string]: string };
  path: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
