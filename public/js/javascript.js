// menu
var tombolMenu = $(".tombol-menu"); //digunakan untuk mencari tombol menu pada halaman web. Kode ini akan mencari elemen HTML dengan class "tombol-menu" dan menyimpannya ke dalam variabel 
var menu = $("nav .menu ul"); // digunakan untuk mencari elemen menu pada halaman web. Kode ini akan mencari elemen HTML dengan tag <nav> yang memiliki class "menu" dan tag <ul> di dalamnya, kemudian menyimpannya ke dalam variabel menu

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle(); // Mengaktifkan tombol menu jika dalam keadaan non-aktif
    });
    menu.click(function(){
        menu.toggle();
    });
}
$(document).ready(function(){
    var width = $(window).width();
    if(width < 990){
        klikMenu();
    }
})
//Fungsi ini digunakan untuk membuat sebuah event listener pada tombol (atau elemen apapun) dengan menggunakan metode click()
// menu.toggle() yang digunakan untuk menampilkan atau menyembunyikan sebuah elemen pada halaman web. Elemen yang dimaksud di sini adalah menu, yang sebelumnya sudah di-definisikan di dalam kode JavaScript.

// check lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 990){
        menu.css("display","block");
        // display : block
    }else{
        menu.css("display", "none");
    }
    klikMenu();
})

// efek scroll pada navigasi
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop(); //scroll_pos = $(this).scrollTop(); adalah kode yang digunakan untuk mengupdate nilai variabel scroll_pos dengan nilai posisi pengguliran halaman web pada saat ini. Fungsi scrollTop() digunakan untuk mendapatkan nilai posisi pengguliran halaman web pada saat ini
        if(scroll_pos > 0){
            $("nav").addClass("putih"); // $("nav").addClass("putih"); adalah kode yang digunakan untuk menambahkan class "putih" pada elemen <nav>. Ini akan mengubah tampilan elemen <nav> dengan menambahkan style CSS yang terkait dengan class "putih".
        }else{
            $("nav").removeClass("putih"); 
        }
    })
});
