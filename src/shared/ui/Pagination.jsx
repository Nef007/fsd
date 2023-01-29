import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Dropdown, Stack } from "react-bootstrap";

export const PaginationCustom = ({
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  total = 200,
  defaultCurrent = 1,
  onChange = () => {},
}) => {
  const [activePage, setActivePage] = React.useState(defaultCurrent);
  const [activePageSize, setActivePageSize] = React.useState(defaultPageSize);

  let lastPage = Math.ceil(total / defaultPageSize);

  let pageNums = getPaginationItems1(activePage, lastPage, 7);

  const setParams = (page = activePage, pageSize = activePageSize) => {
    setActivePage(page);
    setActivePageSize(pageSize);
    onChange({ page, pageSize, total });
  };

  return (
    <Stack direction="horizontal" gap={1} className="align-items-start">
      <Pagination>
        <Pagination.Prev
          disabled={activePage === pageNums[0]}
          onClick={() => setParams(activePage - 1)}
        />
        {pageNums.map((pageNum, index) => {
          if (pageNum === "prev") {
            return (
              <Pagination.Ellipsis
                key={index}
                onClick={() =>
                  setParams(activePage - 5 < 1 ? 1 : activePage - 5)
                }
              />
            );
          } else if (pageNum === "next") {
            return (
              <Pagination.Ellipsis
                key={index}
                onClick={() =>
                  setParams(
                    activePage + 5 > lastPage ? lastPage : activePage + 5
                  )
                }
              />
            );
          } else {
            return (
              <Pagination.Item
                key={index}
                active={activePage === pageNum}
                onClick={() => activePage !== pageNum && setParams(pageNum)}
              >
                {pageNum}
              </Pagination.Item>
            );
          }
        })}
        <Pagination.Next
          disabled={activePage === pageNums[pageNums.length - 1]}
          onClick={() => setParams(activePage + 1)}
        />
      </Pagination>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {activePageSize}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {pageSizeOptions.map((item) => (
            <Dropdown.Item
              key={item}
              onClick={() => setParams(undefined, item)}
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Stack>
  );
};

// function getPaginationItems(currentPage, lastPage, maxLength) {
//   const res = [];
//
//   console.log("GEt", currentPage, lastPage, maxLength);
//
//   // handle lastPage less than or equal to maxLength
//   if (lastPage <= maxLength) {
//     for (let i = 1; i <= lastPage; i++) {
//       res.push(i);
//     }
//   }
//
//   // handle ellipsis logics
//   else {
//     const firstPage = 1;
//     const confirmedPagesCount = maxLength === 7 ? 3 : 2;
//     const deductedMaxLength = maxLength - confirmedPagesCount;
//     const sideLength = deductedMaxLength / 2;
//
//     // handle ellipsis in the middle
//     if (
//       currentPage - firstPage < sideLength ||
//       lastPage - currentPage < sideLength
//     ) {
//       console.log(1111);
//       for (let j = 1; j <= sideLength + firstPage; j++) {
//         res.push(j);
//       }
//
//       res.push(NaN);
//
//       for (let k = lastPage - sideLength; k <= lastPage; k++) {
//         res.push(k);
//       }
//     } else if (
//       currentPage - firstPage >= deductedMaxLength &&
//       lastPage - currentPage >= deductedMaxLength
//     ) {
//       const deductedSideLength = sideLength - 1;
//       res.push(1);
//       res.push(NaN);
//       console.log(2222);
//       for (
//         let l = currentPage - deductedSideLength;
//         l <= currentPage + deductedSideLength;
//         l++
//       ) {
//         res.push(l);
//       }
//
//       res.push(NaN);
//       res.push(lastPage);
//     } else {
//       const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
//       let remainingLength = maxLength;
//
//       if (isNearFirstPage) {
//         for (let m = 1; m <= currentPage + 1; m++) {
//           res.push(m);
//           remainingLength -= 1;
//         }
//
//         res.push(NaN);
//         remainingLength -= 1;
//
//         for (let n = lastPage - (remainingLength - 1); n <= lastPage; n++) {
//           res.push(n);
//         }
//       } else {
//         for (let o = lastPage; o >= currentPage - 1; o--) {
//           res.unshift(o);
//           remainingLength -= 1;
//         }
//
//         res.unshift(NaN);
//         remainingLength -= 1;
//
//         for (let p = remainingLength; p >= 1; p--) {
//           res.unshift(p);
//         }
//       }
//     }
//   }
//
//   return res;
// }

function getPaginationItems1(currentPage, lastPage, maxLength) {
  const res = [];

  // handle lastPage less than or equal to maxLength
  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i);
    }
  }

  // handle ellipsis logics
  else {
    const firstPage = 1;
    const confirmedPagesCount = 3;
    const deductedMaxLength = maxLength - confirmedPagesCount; //4  //5
    const sideLength = deductedMaxLength; //4 //5

    // handle ellipsis in the middle
    if (
      currentPage - firstPage < sideLength ||
      lastPage - currentPage < sideLength
    ) {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
      if (isNearFirstPage) {
        for (let r = 1; r <= 4; r++) {
          res.push(r);
        }
        for (let m = 5; m <= currentPage + firstPage; m++) {
          res.push(m);
        }
        res.push("next");

        res.push(lastPage);
        //  }
      } else {
        res.push(1);

        res.push("prev");

        if (lastPage - currentPage === 3) {
          res.push(currentPage - 1);
        }

        for (let r = lastPage - 3; r <= lastPage; r++) {
          res.push(r);
        }
      }
    } else if (
      currentPage - firstPage >= deductedMaxLength &&
      lastPage - currentPage >= deductedMaxLength
    ) {
      const deductedSideLength = sideLength - 3;
      res.push(1);
      res.push("prev");

      for (
        let l = currentPage - deductedSideLength;
        l <= currentPage + deductedSideLength;
        l++
      ) {
        res.push(l);
      }

      res.push("next");
      res.push(lastPage);
    }
  }

  return res;
}
