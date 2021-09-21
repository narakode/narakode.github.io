---
layout: post
title: "Macam-Macam Tipe Input Pada HTML"
date: 2021-09-21 12:30:00 +0700
cover: macam-tipe-input.png
thumb: macam-tipe-input-thumb.png
categories: html
---

[Jenis Input HTML]({{ page.url }}) - Form pada halaman website terdiri dari berbagai macam tipe input.

Terdapat lebih dari __20 tipe input__ yang ada pada HTML.

Masing-masing tipe input memiliki fungsi yang berbeda-beda, yang dibedakan pada atribut `type`.

Berikut penjelasanya masing-masing:

## Input Type Text

Tipe input ini dapat menerima inputan berupa teks.

Contoh penggunaanya seperti inputan nama, inputan nama pengguna, dll.

```html
<input type="text" placeholder="Masukan Nama">
```

***

![Input Type Text]({{ site.baseurl }}/assets/img/macam-tipe-input/type-text.png)

***

Tipe input ini memiliki fungsi yang mirip seperti tag `textarea`.

Perbedaanya, `textarea` dapat menerima teks multi baris, sedangkan *input type text* hanya dapat menerima teks dalam satu baris.

## Input Type Number

Tipe input ini dapat menerima inputan berupa angka.

Contohnya untuk membuat inputan usia, inputan nomor, dll.

```html
<input type="number" placeholder="Masukan Usia">
```

***

![Input Type Number]({{ site.baseurl }}/assets/img/macam-tipe-input/type-number.png)

***

## Input Type Password

Tipe input ini dapat menerima inputan berupa password/kata sandi.

Teks yang diisi pada Tipe input tidak akan terlihat pada *browser*, biasanya akan diganti simbol lingkaran atau bintang.

```html
<input type="password" placeholder="Masukan Kata Sandi">
```

***

![Input Type Password]({{ site.baseurl }}/assets/img/macam-tipe-input/type-password.png)

***

## Input Type Checkbox

Tipe input ini dapat menerima inputan berupa pilihan dalam bentuk kotak centang.

Pengguna dapat memilih lebih dari satu pilihan.

Contohnya untuk membuat inputan hobi, dll.

```html
<input type="checkbox" value="Makan"> Makan <br>
<input type="checkbox" value="Minum"> Minum <br>
<input type="checkbox" value="Tidur"> Tidur <br>
```

***

![Input Type Checkbox]({{ site.baseurl }}/assets/img/macam-tipe-input/type-checkbox.png)

***

## Input Type Radio

Jika input tipe `checbox` dapat memilih pilihan lebih dari satu, input tipe `radio` hanya memperbolehkan pengguna memilih satu pilihan.

Penggunaanya biasanya untuk membuat inputan jenis kelamin, inputan agama, dll.

```html
<input type="radio" name="gender" value="Pria"> Pria <br>
<input type="radio" name="gender" value="Wanita"> Wanita <br>
<input type="radio" name="gender" value="Lainya"> Lainya <br>
```

***

![Input Type Radio]({{ site.baseurl }}/assets/img/macam-tipe-input/type-radio.png)

***

## Input Type Date

Tipe input dapat menerima inputan berupa tanggal.

Setiap *browser* memiliki tampilan yang berbeda-beda pada penampilan input tanggalnya.

```html
<input type="date">
```

***

![Input Type Date]({{ site.baseurl }}/assets/img/macam-tipe-input/type-date.png)

***

## Input Type File

Tipe input ini dapat menerima inputan *file*, pengguna dapat menggungah berkas yang ada pada komputernya.

```html
<input type="file">
```

***

![Input Type File]({{ site.baseurl }}/assets/img/macam-tipe-input/type-file.png)

***

## Input Type Color

Tipe input ini dapat menerima inputan berupa warna.

```html
<input type="color">
```

***

![Input Type Color]({{ site.baseurl }}/assets/img/macam-tipe-input/type-color.png)

***

## Input Type Range

Tipe input ini dapat menerima inputan angka di dalam jarak yang ditentukan.

Biasanya tampilan input ini berbentuk *silder*, pengguna hanya perlu mengatur *silder*-nya sesuai dengan angka yang diinginkan.

```html
<input type="range" min="10" max="50">
```

***

![Input Type Range]({{ site.baseurl }}/assets/img/macam-tipe-input/type-range.png)

***

Gunakan atribut `min` dan `max` untuk mengatur batas terkecil dan terbesar pada `silder`-nya.

## Input Type Hidden

Tipe input ini digunakan untuk membuat inputan yang tidak terlihat pada *browser*.

Meskipun tidak terlihat, nilai pada input ini akan tetap dikirim pada saat form-nya dikirim.

Biasanya tipe input ini digunakan untuk menyimpan data input yang pengguna tidak diperbolehkan untuk mengubahnya, seperti token, id, dsb.

```html
<input type="hidden" name="_token" value="Yjask12">
```

***

## Referensi

Untuk referensi tentang __macam-macam tipe input__ yang lebih lengkap, anda dapat mengunjungi link berikut.

<a href="https://www.w3schools.com/html/html_form_input_types.asp" target="_blank">HTML Form Input Types</a>