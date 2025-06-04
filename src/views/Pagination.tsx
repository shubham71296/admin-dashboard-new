// src/components/Pagination.tsx
type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages === 1) return null;

  return (
    <div className="flex justify-center items-center mt-6 space-x-1">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border bg-white shadow-sm hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md border transition-all shadow-sm
              ${isActive
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white hover:bg-blue-100"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md border bg-white shadow-sm hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
