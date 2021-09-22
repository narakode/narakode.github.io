---
layout: post
title: "Macam-Macam Atribut Pada Tag Input HTML"
date: 2021-09-22 15:20:00 +0700
cover: atribut-input-html.png
thumb: atribut-input-html-thumb.png
categories: html
---

[Atribut Pada Tag Input]({{ page.url }}) - Tag `input` pada HTML berguna untuk membuat kotak yang menerima input/masukan dari pengguna.

Tag input memiliki beberapa __atribut__ yang berfungsi untuk mengatur bagaimana input tersebut digunakan.

Masing-masing atribut memiliki fungsi dan aturanya masing-masing, berikut penjabaranya.

## Atribut Name

Atribut ini digunakan untuk mengatur indeks atau variabel pada *request* yang dikirim form.

```html
<input type="text" name="nama_lengkap">
``` 

Kemudian pada server, kita dapat mengakses nilai yang dikirim form dengan mengacu pada atribut `name` tersebut.

Contoh disini saya menggunakan bahasa pemrograman PHP.

```php
<?php
  $nama = $_REQUEST['nama_lengkap'];
  echo $nama;
?>
```

## Atribut Value

Atribut ini digunakan untuk mengatur nilai awal pada tag input.

```html
<input type="text" name="nama_lengkap" value="Handoko">
```

## Atribut Placeholder

Atribut ini digunakan untuk mengatur teks bantuan pada tag input.

Teks bantuan tersebut akan muncul ketika tag input tersebut nilainya kosong.

```html
<input type="text" name="nama_lengkap" placeholder="Masukan Nama Lengkap">
```

## Atribut Required

Atribut ini digunakan untuk memvalidasi tag `input`, tag `input` harus terisi nilainya sebelum form dikirim.

Jika tag `input` dengan atribut *required* nilainya kosong pada saat form dikirim, maka akan muncul peringatan tag tersebut wajib diisi.

Atribut ini dapat dituliskan tanpa menuliskan nilainya.

```html
<input type="text" name="nama_lengkap" required>
```

## Atribut Autofocus

Atribut ini digunakan untuk mengatur tag `input` agar secara otomatis difokuskan pada saat halaman web dimuat.

```html
<input type="text" name="nama_lengkap" autofocus>
```

## Atribut Readonly

Atribut ini digunakan untuk mengatur tag `input` agar nilainya tidak bisa diubah, namun masih bisa disalin, disorot, dsb.

Nilai pada atribut ini juga masih ikut terkirim pada pengiriman form.

```html
<input type="text" name="nama_lengkap" value="Handoko" readonly>
```

## Atribut Disabled

Atribut ini fungsinya mirip seperti atribut `readonly`, yaitu untuk mengatur agar nilai pada tagnya tidak bisa diubah.

Bedanya nilai pada tag dengan atribut `disabled` nilainya tidak ikut terkirim pada pengiriman form.

```html
<input type="text" name="nama_lengkap" value="Handoko" disabled>
```

## Referensi

Untuk penjelasan lebih lanjut mengenai __macam-macam atribut pada tag input__, anda dapat mengunjungi *link* berikut.

<a href="https://www.w3schools.com/html/html_form_attributes.asp" target="_blank">HTML Form Attributes</a>