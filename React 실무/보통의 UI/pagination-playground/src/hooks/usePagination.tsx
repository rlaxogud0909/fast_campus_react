import React from "react";

interface Props {
    count: number; // 페이지의 전체 갯수
    page: number; // 현재 페이지
    onPageChange: (page: number) => void; // 페이지 변환
    disabled?: boolean; // disable
    siblingCount?: number; // 현재 페이지 전후에 표시되는 페이지 수 -> 6페이지 일때 1,2,3 ... 5, 6, 7 ... 8, 9, 10 => 5, 6처럼 표시
    boundaryCount?: number; // 시작과 끝에 표시되는 페이지 수 -> 1, 2 ... 6, 7, 8 ... 9, 10 => 1과 10이 표시 된는 것처럼
}

const usePagination = ({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount = 1,
    boundaryCount = 1,
}: Props) => {
    // range(2, 5)를 넘겨줬을 때 -> 반환: [2, 3, 4, 5]
    const range = (start: number, end: number) => {
        const length = end - start + 1;

        return Array.from({ length }).map((_, index) => index + start);
    };

    const startPage = 1;
    const endPage = count;

    const startPages = range(startPage, Math.min(boundaryCount, count));
    const endPages = range(
        Math.max(count - boundaryCount + 1, boundaryCount + 1),
        count
    );

    const siblingsStart = Math.max(
        Math.min(
            page + 1 - siblingCount,
            count - boundaryCount - siblingCount * 2 - 1
        ),
        boundaryCount + 2
    );

    const siblingsEnd = Math.min(
        Math.max(page + 1 + siblingCount, boundaryCount + siblingCount * 2 + 2),
        endPages.length > 0 ? endPages[0] - 2 : endPage - 1
    );

    const itemList = [
        "prev",
        ...startPages,
        ...(siblingsStart > boundaryCount + 2
            ? ["start-ellipsis"]
            : boundaryCount + 1 < count - boundaryCount
            ? [boundaryCount + 1]
            : []),
        ...range(siblingsStart, siblingsEnd),
        ...(siblingsEnd < count - boundaryCount - 1
            ? ["end-ellipsis"]
            : count - boundaryCount > boundaryCount
            ? [count - boundaryCount]
            : []),
        ...endPages,
        "next",
    ];

    const items = itemList.map((item, index) =>
        typeof item === "number"
            ? {
                  key: index,
                  onClick: () => onPageChange(item - 1),
                  disabled,
                  selected: item - 1 === page,
                  item,
              }
            : {
                  key: index,
                  onClick: () =>
                      onPageChange(item === "next" ? page + 1 : page - 1),
                  disabled:
                      disabled ||
                      item.indexOf("ellipsis") > -1 ||
                      (item === "next" ? page >= count - 1 : page - 1 < 0),
                  selected: false,
                  item,
              }
    );

    return {
        items,
    };
};

export default usePagination;
