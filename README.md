# Writing Week 3

## 1. Module-8 JS Intermediate Array & Multidimensional Array

<br>

### **Array**

Array adalah sebuah data non primitive yang dapat meynimpan lebih dari satu data. Dia juga fleksibel dapat menyimpan tipe data mulai dari string, number, boolean, dan lainnya.

![Gambar Array](./1%20Array/Gambar%20Array.png)

*Gambar 1. Array Example*

Pada gambar 1, dapat terlihat array disini adalah data yang berada di antara `[]` atau Square Bracket. Dimana array ini menyimpan data secara berurutan dimulai dari indeks ke-0 sampai dengan indeks terakhir. Untuk memanggil array cukup mudah, dengan memanggil nama Array tersebut, kemudian apabila kita ingin lebih spesifik array pada indeks ke berapa yang ingin kita cetak, dapat memanggilnya dengan `namaArray[0]` seperti pada gambar 1

 Beberapa method yang dapat digunakan untuk memodifikasi sebuah array

 1. push()

    Method ini memudahkan kita untuk menambahkan sebuah data pada array dengan syarat, data yang ditambahkan dimulai dari indeks terakhir dari array tersebut

    ![Gambar Push](./1%20Array/Gambar%20Push.png)

    *Gambar 2. Push Method*

2. shift()

    Method ini digunakan untuk menghapus dari indeks yang pertama atau dari kiri, penggunaannya sama seperti sebelumnya tetapi shift lebih untuk menghapus sebuah data pad array

    ![Gambar Shift](./1%20Array/Gambar%20Shift.png)

    *Gambar 3. Shift Method*

3. unshift()

    Method ini adalah kebalikan dari push, dimana push menambahkan sebuah data baru pada indeks terakhir, sedangkan unshift menambahkan sebuah data baru pada indeks pertama

    ![Gambar Unshift](./1%20Array/Gambar%20Unshift.png)

    *Gambar 4. Unshift Method*

4. sort()

    Method ini dikhususkan untuk mengurutkan secara Ascending atau Descending numerik, untuk array yang berisikan string tidak dapat digunakan pada method ini

    ![Gambar Sort](./1%20Array/Gambar%20Sort.png)

    *Gambar 5. Sort Method*

Selain itu, apabila kita ingin mencetak sebuah array satu per satu ke dalam website, kita memerlukan sebuah method untuk mengeksekusi hal tersebut. Terdapat dua cara untuk melakukannya

1. ForEach()

    ForEach digunakan ketika kita hanya ingin menampilkan sebuah array tanpa ada sebuah modifikasi ataupun perubahan yang terjadi (static). Method ini adalah sebuah looping yang mencetak setiap element pada array

    ![Gambar ForEach](./1%20Array/Gambar%20Foreach.png)

    *Gambar 6. ForEach Metohd*

2. map()

    map digunakan ketika kita memerlukan sebuah modifikasi pada array yang telah dibuat, dan membutuhkan sebuah operasi tertentu (dynamic). Method ini seringkali digunakan untuk melakukan sebuah kondisi khusus dalam menampilkan array

    ![Gambar map](./1%20Array/Gambar%20Map.png)

    *Gambar 7. Map Method*

Untuk kedua hal di atas, disarankan menggunakan ForEach apabila array yang ingin ditampilkan tidak perlu sebuah kondisi tertentu, karena ForEach memiliki perfoma yang baik dalam penerapannya


### **Multidimensional Array**

Pada bagian ini sama seperti sebuah Array, method method yang digunakan juga dapat diaplikasi pada multidimensional. Bedanya Multi array ini berisikan lebih dari tipe data yang berbeda

![Gambar Multidimensional](./1%20Array/Gambar%20Multdi.png)

*Gambar 8. Array Multidimensional*

Cara mengakses multidimensional sedikit berbeda, dia dapat diakses dengan membutuhkan dua indeks

![Gambar Akses Multi](./1%20Array/Gambar%20AksesMulti.png)

*Gambar 9. Akses Multidimensional*

Pada indeks array yang pertama adalah kotak array pada indeks ke berapa, sedangkan indeks array yang kedua adalah isi dari kotak array tersebut

Penggunaan looping juga sama dengan Array, pada kali ini akan menggunakan ForEach. Namun, pada multidimensional karena dia terdapat lebih dari satu array, maka membutuhkan nested ForEach

![Gambar Nested ForEach](./1%20Array/Gambar%20Nested%20ForEach.png)

*Gambar 10. Nested ForEach*



<br><br>

## 2. Module-8 JS Object

<br>

### **Object**

Object merupakan sebuah tipe data yang dapat menyimpan sebuah properti dan fungsi (method). Properti seperti pada isi array, sedangkan fungsi(method) berisikan fungsi di dalam object

Dalam membuat object biasanya diapit dalam curly bracet `{}`

![Gambar Object](./2%20Object/Gambar%20Object.png)

*Gambar 11. Object*

Object sama seperti array, dapat diakses setiap individunya dengan pemanggilan menggunakan `.` titik atau menggunakan bracket notation

![Gambar Akses Object](./2%20Object/Gambar%20AccessObject.png)

*Gambar 12. Access Object*

Object dapat diupdate dengan menggunakan beberapa cara, dapat ditambahkan sebuah data baru ataupun mengupdate saja

![Gambar Update Object](./2%20Object/Gambar%20Update.png)

*Gambar 13. Update Object*

Untuk menghapus cukup gunakan method `delete` pada object yang dituju

![Gambar Delete Object](./2%20Object/Gambar%20Delete.png)

*Gambar 14. Delete Object*

Terakhir, untuk mengakses sebuah object maka memerlukan sebuah looping sama seperti array, disini akan menggunakan method for..in.. untuk mendapatkan nilai dari sebuah object

![Gambar Looping Object](./2%20Object/Gambar%20Looping.png)

*Gambar 15. Looping Object*

<br>

### **Array of Object**

Sama seperti object dan array, dalam penerapannya kita akan menggunkan data yang bercabang cabang dalam menyimpan sebuah data, dan berikut cara penerapannya hampir sama dengan sebelumnya. Bedanya dengan object, karena ini adalah sebuah array yang memiliki sebuah object, maka kita akan menggunakan method yang sama dengan array

![Gambar Array of Object](./2%20Object/Gambar%20ArrayObject.png)

*Gambar 16. Array of Object*


<br><br>

## 3. Module-8 JS Rekrusif

<br>

### **Rekrusif**

Rekrusif digunakan untuk memanggil sebuah function itu sendiri di dalam function tersebut. Biasanya ini digunakan untuk membuat sebuah rumus yang membutuhkan perhitungan lebih seperti matematika, fisika, dan lain lain. 

Kita ambil contoh pada sebuah perulangan yang biasa saja, contohnya perulangan untuk faktorial, tentu membutuhkan sebuah method seperti looping untuk dapat memecahkan sebuah faktorial dalam program

![Gambar Faktorial](./3%20Rekrusif/Gambar%20For.png)

*Gambar 17. Looping Faktorial*

Sepertinya kodingan berjalan dengan baik, namun apabila dibandingkan dengan rekrusif maka hasilnya akan sangat berbeda

![Gambar Faktorial Rekrusif](./3%20Rekrusif/Gambar%20Rekrusif.png)

*Gambar 18. Rekrusif Faktorial*

Lebih mudah menggunakan rekrusif bukan? Nah, inilah kegunaan dari rekrusif. Sangat disayangkan sekali untuk rekrusif ini kebanyakan kasus digunakan hanya sebatas pada perhitungan yang merujuk pada proses matematika


<br><br>

## 4. Module-8 JS Web Storage

<br>

### **Web Storage**

Web Storage adalah penyimpanan secara lokal di setiap pengguna komputer yang mengakses pada website dengan penyimpanan sebesar 5mb

![Gambar Web Storage](./4%20Web%20Storage/Gambar%20Web%20Storage.png)

*Gambar 19. Web Storage*

Dalam praktiknya, web storage memiliki dua tipe object yang berbeda dalam menyimpan sesuai dengan kondisi yang diinginkan

1. localStorage

    Ini adalah penyimpanan berupa data yang dapat disimpan tanpa akan hilang apabila kita close website tersebut ataupun direfresh. Tipe data ini sangat berguna apabila kita ingin menyimpan data pengguna dalam waktu yang agak lama

    ![Gambar Local Storage](./4%20Web%20Storage/Gambar%20Local%20Storage.png)

    *Gambar 20. Local Storage*

    Penggunaan local storage menggunakan object dari `localStorage` dengan method `setItem`. Pada halaman website akan tersimpan pada local storage dengan lastName adalah herlambang. Apabila halaman tersebut direfresh atau dimatikan, data tersebut akan masih menempel sampai dengan kita menghapusnya dengan menggunakan method `removeItem`

    ![Gambar Local Storage Remove](./4%20Web%20Storage/Gambar%20Local%20Storage%20Remove.png)
    
    *Gambar 21. Local Storage removeItem*

    Selanjutnya, adalah contoh dari penggunaan method clickcount untuk menghitung jumlah berapa kali sudah mengklik sebuah button tersebut, dan disimpan dalam localStorage

    ![Gambar Click localStorage](./4%20Web%20Storage/Gambar%20Local%20Storage%20Click.png)

    *Gambar 22. localStorage click*

2. Session Storage

    Berbeda dengan localStorage yang datanya akan terus tersimpan, untuk sessionStorage data bersifat sementara setiap pengguna melakukan refresh ataupun berpindah halaman dan juga keluar dari halaman akan secara otomatis menghapus seluruh data di sessionStorage

    ![Gambar SessionStorage](./4%20Web%20Storage/Gambar%20Session%20Storage.png)

    *Gambar 23. Session Storage*

    Lalu, apa gunanya session storage? sessionStorage digunakan ketika kita perlu menyimpan sebuah data yang sifatnya privasi dan tidak boleh untuk disimpan dalam jangka waktu yang lama, karena nantinya data ini bisa saja diambil oleh pihak yang tidak bertanggung jawab untuk disalahgunakan. Nah, biasanya sessionStorage kita dapat temukan ketika sedang ujian nasional. Jawaban yang sudah dipilih akan tersimpan sementara pada sessionStorage, dan apabila direfresh atau komputer mati, semua pilihan jawaban akan kembali menjadi tidak teprilih

    ![Gambar Ujian Nasional](./4%20Web%20Storage/Gambar%20Ujian.jpg)

    *Gambar 24. Ujian Nasional*


<br><br>

## 5. Module-8 JS Asynchronous

<br>

### **Asynchronous**

Merupakan sebuah penyelesaian suatu task yang dilakukan secara tidak berurutan, dimana yang dapat diselesaikan lebih cepat akan dilakukan lebih awal dibandignkan proses yang membutuhkan waktu sedikit lebih lama

![Gambar Asynchronous](./5%20Asynchronous/Gambar%20Asynchronous.png.crdownload)

*Gambar 25. Asynchronous*

Dalam penerapannya pada javascript, asynchronous seperti pada gambar 26, dimana dia akan mencetak yang lebih cepat dan akan menunggu proses b selagi mengerjakan proses c

![Gambar Asynchronous](./5%20Asynchronous/Gambar%20Asynchronous.png)

*Gambar 26. Asynchronous in JS*

Dalam penerapannya di Javascript, asynchronous dapat menggunakan promise, dimana ini seperti sebuah janji yang dapat ditepati ataupun tidak ditepati tergantung dari kondisi yang terjadi

![Gambar Promise](./5%20Asynchronous/Gambar%20Promise.png)

*Gambar 27. Promise*

Promise dapat dideklarasikan seperti pada gambar 27, dimana `resolve` adalah hasil bila ditepati, sedangkan `reject` adalah hasil bila tidak tersampaikan. Kedua parameter tersebut dapat diubah sesuai dengan keinginan masing - masing. Pada bagian bawah, terdapat nama promise dan kemudian ada `.then` yang berfungsi untuk menampilkan hasil yang sudah jadi, sedangkan `.catch` berfungsi menampilkan kenapa atau hasil dari janji yang tidak ditepati

![Gambar Promise resolve](./5%20Asynchronous/Gambar%20Resolved.png)

*Gambar 28. Promise Resolved*

Karna kondisi tersebut berjalan dengan lancar, maka dia akan menghasilkan nilai promise yang ditepati. Apabila gagal dia akan menjalankan seperti pada gambar 29

![Gambar Promise Rejected](./5%20Asynchronous/Gambar%20Rejected.png)

*Gambar 29. Promise Rejected*


<br><br>

## Kesimpulan

Minggu ini lebih belajar mendalam mengenai Javascript, mulai dari tipe data, function, method, dan sampai dengan proses asynchronous yang berguna nantinya dalam menghandle API. Materi yang menurut saya menarik adalah materi pada pembelajaran Asynchronous, karena pada praktiknya Asynchronous seringkali digunakan untuk mempercepat suatu proses yang dapat ditampilkan terlebih dahulu, sangat berguna dalam menjaga transfer data tetap aman dan cepat