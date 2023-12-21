"use client";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }:{count: number}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = Number(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type:"prev"|"next") => {
    type === "prev"
      ? params.set("page", String(page - 1))
      : params.set("page", String(page + 1));
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;