---
layout: post
title: "Cara Menambahkan Ikon Pada Web Dengan Font Awesome"
date: 2021-10-29 07:00:00 +0700
cover: font-awesome.png
thumb: font-awesome.png
categories: css
---

[Ikon]({{ page.url }}) - Ikon adalah gambar kecil yang menggambarkan sebuah aksi/objek.

Ikon dapat digunakan sebagai penanda dari konten pada halaman *website*.

Untuk menampilkan ikon pada halaman *website*, anda dapat menggunakan __Font Awesome__.

Apa itu Font Awesome? Mari kita simak penjelasanya berikut.

## Mengenal Font Awesome

***

![Font Awesome]({{ site.baseurl }}/assets/img/css/icon/font-awesome.png)

***

Font Awesome adalah kumpulan ikon siap pakai, yang dihubungkan dengan file CSS.

Font Awesome menyediakan **ribuan ikon** siap pakai dari berbagai jenis kategori.

Font Awesome sekarang sudah memasuki __versi 6 Beta__, pada postingan saya akan menggunakan versi 5 saja.

## Menggunakan Font Awesome

Langsung saja, berikut adalah langkah-langkah menggunakan font awesome pada halaman web.

### Menyisipkan Font Awesome Ke Dalam HTML

Pertama, salin kode link font awesome berikut.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
```

Tempelkan ke dalam HTML tepatnya pada tag `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ikon</title>
  <!-- Templelkan Disini -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
<body>

</body>
</html>
```

### Menambahkan Ikon

Lanjut, untuk menambahkan ikon gunakan tag `<i>` dengan atribut `class` yang berisi **fa-nama-ikonnya**.

Contoh.

```html
<i class="fa fa-camera"></i>
<i class="fa fa-home"></i>
<i class="fa fa-user"></i>
```

***

![Font Icon]({{ site.baseurl }}/assets/img/css/icon/font-icon.png)

***

Penjelasan:

* `fa`: jenis ikon, bisa diganti dengan `fas`, `far`, `fal`, `fad` atau `fab`
* `fa-namaikon`: sebelum nama ikon diberi prefiks `fa`.

### Mengubah Ukuran Ikon

Untuk mengubah ukuran ikon, tambahkan **fa-ukuran** pada atribut `class`.

Contoh.

```html
<i class="fa fa-camera fa-lg"></i>
<i class="fa fa-home fa-2x"></i>
<i class="fa fa-user fa-3x"></i>
```

***

![Font Size]({{ site.baseurl }}/assets/img/css/icon/font-size.png)

***

### Mengubah Warna Ikon

Untuk mengubah warna ikon, gunakan css properti `color`.

Contoh.

```html
<i class="fa fa-lg fa-camera" style="color: red"></i>
<i class="fa fa-lg fa-home" style="color: blue"></i>
<i class="fa fa-lg fa-user" style="color: green"></i>
```

***

![Font Color]({{ site.baseurl }}/assets/img/css/icon/font-color.png)

***

### Memutar Ikon

Untuk memutar ikon, tambahkan **fa-rotate-nilai** pada atribut `class`.

Contoh.

```html
<i class="fa fa-lg fa-home"></i>
<i class="fa fa-lg fa-home fa-rotate-90"></i>
<i class="fa fa-lg fa-home fa-rotate-180"></i>
<i class="fa fa-lg fa-home fa-rotate-270"></i>
```

***

![Font Rotate]({{ site.baseurl }}/assets/img/css/icon/font-rotate.png)

***

## Lebih Lanjut

Masih ada banyak penggunaan font-awesome selain beberapa diatas.

Untuk penggunaan lebih lanjut, anda dapat langsung mengunjungi dokumentasinya langsung.

<a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use" target="_blank">Dokumentasi Font Awesome</a>