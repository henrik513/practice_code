/*
const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)
getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }

getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }
getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }
*/


function getPagination(offset, limit, total){
    const pageLength = 5;
    const totalPage = Math.ceil( total / limit);
    const currentPage = Math.ceil(  (offset+1) / limit );
    const renderPages = [];
    if(totalPage < pageLength) { 
        for( let i = 1; i <= totalPage; i ++) {
            renderPages.push(i);
        }
    }else{
        if( currentPage + 2 > pageLength ){
            let startIndex = currentPage - 2 ;
            let endIndex = currentPage + 2;
            while(endIndex > totalPage) {
                startIndex --;
                endIndex --;
            }
            for( let i = startIndex; i <= endIndex; i++){
                renderPages.push(i);
            }

        }else { 
            for( let i = 1; i <= pageLength; i ++) {
                renderPages.push(i);
            }
        }
    }
    return {currentPage, totalPage, renderPages};
}