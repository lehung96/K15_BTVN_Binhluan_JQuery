/**
 *  Yêu cầu áp dụng jquery để tạo ra một trang web có chức năng Xem, Thêm , sửa , Xóa
 * vào trong giao diện 
 * 
 */


// giả sử mình có một danh sách list data như thế này.
// Bây giờ mình muốn thêm ông user vào trong cái list data của mình 

let data = [

];

// console.log( data);




// for(let i = 0; i<data.length; i++){
//     // link ảnh là img src="" nó sẽ lấy thằng data thứ i  data[i] trong avatar
//     let friend =`
//     <div class="friend">
//         <div class="avatar"><img src="${data[i].avatar}" alt=""></div>
//         <div class="name">${data[i].name}</div>
//     </div>

//     `
//     // in ra listFriend gồm avatar và name
//     $('.listFriend').append(friend);
// }




 
/**
 *  Yều cầu 1:  mình có data như này bây giờ mình cho hiển thị lên màn mình 

    chạy vòng for array data sẽ tạo ra từng cái thẻ ảnh và name
 * 
 *  sử dụng function render chức năng là  để sau này mình có thể tái sử dụng 
 */



// Hàm function render ()bên trong hàm dùng vòng for duyệt để xem data


function render (){
    //trước khi gán cái data với vào , thì mình phải hủy cái data cũ đi 
    $(".listFriend").html("");
    
    for(let i = 0; i<data.length; i++){
        // link ảnh là img src="" nó sẽ lấy thằng data thứ i  data[i] trong avatar
        // class ="friend" dùng để nhận style
    
        let friend =`
        <div class="friend">
            <div class="info">
                <div class="avatar"><img src="${data[i].avatar}" alt=""></div>
                <div class="name name${i}">${data[i].name}</div>
                <div class="comment comment${i}">${data[i].comment}</div>

            </div>

            <div class="buttonGroup">
                <button onclick = 'deleteFriend(${i})'>delete</button>
                <button onclick = 'update("comment${i}",${i})'class="update">update</button>
            </div>
        </div>

        `
        // in ra listFriend gồm avatar và name
        $('.listFriend').append(friend);
    }

}

//yêu cầu 2: Thêm chức năng tên bạn , thì mình sẽ gõ tên bạn bè ở giao diện HTML

//tạo một function addFriend để bắt sự kiện thêm friend ở nút button

function addFriend () {
    const name = $("#name").val();
    const avatar = $("#avatar").val();
    const comment = $("#comment").val();

    // console.log(name,avatar);

    // từ cái name và cái avatar mình lấy được thì sẽ cho và bên trong  Array data bằng các sử dụng
    //sử dụng .push() để đưa đối tượng name và avatar 


    data.push({
        name:name,
        avatar:avatar,
        comment:comment
    });
    render();
}

 //yêu cầu 3:làm chức năng xóa  , ấn vào tên là thì sẽ xóa tên đó 
 // xóa là mình sẽ thực hiện xóa trong cái thằng array data và render lại 

// tạo hàm deleteFriend 
function deleteFriend(index){
    // console.log(index)
    // để xóa phần tử trong array thì dùng array Method .splice()
    //index là vị trí phần tử muốn xóa, 1 là số phần tử số và không thêm thằng nào cả
    data.splice(index,1);
    //sau khi xóa song  thì lại chạy lại hàm render(); này 
    render();// hàm này dùng để show data
}


/**
 * yêu cầu 4: làm chức năng sửa (update)
 * điều kiện update , mình mở ra một cái bảng cái giao diện để mình update
 * ví dụ: như phần commnet của facebook, khi click vào chỉnh sửa phần comment thì sẽ 
 * tạo ra một ô giao diện để nhập nội dung mới vào bên trong này 
 * 
 * 
 */

 //định nghĩa function update

 function update(classname, index){
    // đầu tiên lấy nội dung bên trong ô này 

    // console.log($(`.${className}`).html());

    const oldComment = $(`.${classname}`).html();

    const input = `
     <input type = 'text' value = '${oldComment} ' class = 'newComment'>
    `;
    $(`.${classname}`).html(input);
    $(".newComment").on("keydown", function(event){
        console.log(event.key);
        if(event.key=== "Enter"){
            data[index].comment = $(".newComment").val();
            render();
        }
        if(event.key=== "Escape"){
            render();
        }
    });
}

render();














/**
 * Kết Luận về việc thực hiện 3 yều cầu: xem data, xóa data, thêm data
 * 1. //tạo Hàm function render ()bên trong hàm dùng vòng for duyệt để xem data
 * 
 * 2. Muốn xóa data thì xóa theo index trong array data
 * 
 * 3. Muốn thêm thì chèn vào trong array data này rồi chạy render(); lại  
 * 
 */



/**
 * bài tập về nhà dùng jquery tạo một bài post giống facebook
 * 
 * cần có bài post trên bài post có ảnh avatar và tên người đăng
 * nội dung có thể chữ hoặc ảnh 
 * và phía dưới là là cái bình luận, khi ấn vào nút bình luận thì sẽ mở ra nút bình luận phía dưới cho mình
 * 
 * tạo một cái array chứa thông tin người bình luận array này chứa những cái avatar người bình luận
 * 
 * ---------------------------------------------------------------------------
 * Làm các chức năng :
 * hiển thị bài đăng và hiển thị bình luận.
 * 
 * bài đăng có thể fix cứng trên HTML
 * chức năng xem bình luận ,thêm bình luận , sửa bình luận, và xóa  
 * 
 */