import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
  } from "flowbite-react";
  import Link from "next/link";
  
  const tableHeads = ["Name", "Plan", "Location", "Email", "Date Created"];
  
  const tableContents = [
    {
      tableName: "Robert Fox",
      tablePlan: "Basic",
      tableLocation: "Lagos",
      tableEmail: "waza@gmail.com",
      dateCreated: "21-09-2091",
    },
    {
      tableName: "Robert Fox",
      tablePlan: "Basic",
      tableLocation: "Lagos",
      tableEmail: "waza@gmail.com",
      dateCreated: "21-09-2091",
    },
    {
      tableName: "Robert Fox",
      tablePlan: "Basic",
      tableLocation: "Lagos",
      tableEmail: "waza@gmail.com",
      dateCreated: "21-09-2091",
    },
  ];
  
  const TableComponent = () => {
    return (
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-[#F7F2F7]">
            {tableHeads.map((tableHead, index) => (
              <TableHeadCell key={index} className="bg-[#F7F2F7] h-12">
                {tableHead}
              </TableHeadCell>
            ))}
            <TableHeadCell>
              <span className="sr-only">View</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {tableContents.map((tableContent, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="bg-[#FFDDD2] rounded-full p-4">RF</div>
                  {tableContent.tableName}
                </TableCell>
                <TableCell>{tableContent.tablePlan}</TableCell>
                <TableCell>{tableContent.tableLocation}</TableCell>
                <TableCell>{tableContent.tableEmail}</TableCell>
                <TableCell>{tableContent.dateCreated}</TableCell>
                <TableCell>
                  <Link
                    href="/dashboard/cv-revamp/cv-revamp-view"
                    className="font-medium text-[#7D30EE] hover:underline"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default TableComponent;
  