import { Button } from "@/src/ui";
import React from "react";
import ButtonLeft from "@/public/assets/svgs/button-icon-left.svg";
import ButtonRight from "@/public/assets/svgs/button-icon-right.svg";

type Props = {};

const Pagination = ({ page, setPage, pages }: any) => {
    
console.log(page)
  return (
    <div className="flex justify-end space-x-4">
      <Button
        variant="outlined"
        color="primary"
        label={"Previous"}
        leftIcon={<ButtonLeft />}
        customClassName="bg-white rounded-md border-[#DEDEDE] hover:cursor-pointer"
        onClick={setPage(page - 1)}
      />
  
      <Button
        variant="outlined"
        color="primary"
        label={"Next"}
        rightIcon={<ButtonRight />}
        customClassName="bg-white rounded-md border-[#DEDEDE] hover:cursor-pointer"
        onClick={setPage((prev: number) => {
            prev + 1
        })}
      />
    </div>
  );
};

export default Pagination;
