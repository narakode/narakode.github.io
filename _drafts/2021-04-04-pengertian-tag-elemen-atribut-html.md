---
layout: post
title: "Pengertian Tag Elemen Dan Atribut Pada HTML"
date: 2021-04-04 17:44:00 +0700
cover: pengertian-tag-elemen-atribut.png
thumb: pengertian-tag-elemen-atribut-thumb.png
categories: html
---

Setelah mengetahui struktur dasar HTML, lanjut kita akan belajar mengenai __tag__, __elemen__, dan __attribut__ pada html.

Ketiganya merupakan hal dasar pada HTML, untuk belajar HTML lebih lanjut, kita harus memahami ketiga hal tersebut.

## Tag

Tag adalah kode HTML untuk menandai fungsi dari sebuah text, apakah sebagai gambar, link, paragraf, dll.

Tag ditulis dengan menuliskan nama tag tersebut yang diapit dengan kurung siku.

Sebagian besar tag html memiliki tag pembuka dan penutup.

```html
<nama-tag>Isi Tag</nama-tag>
```

Contoh tag

```html
<h1>Saya tag heading</h1>
```

Pada contoh diatas terdapat tag __h1__. Tag pembukanya yaitu `<h1>` dan penutupnya `</h1>`.

Jika kita lupa menuliskan tag penutupnya, maka kode selanjutnya akan memiliki fungsi yang sama dengan tag tertutup tersebut. Maka dari itu, jangan lupa menutupnya.

Ada beberapa tag yang tidak memiliki tag penutup, seperti tag `img`, `input`, dll.

Penulisanya pun bisa dengan menuliskan tag pembukanya, atau dengan memberikan garis miring sebelum kurung siku tutup.

Contoh

```html
<input type="text" name="nama" placeholder"Nama">
<img src="gambar.jpg" alt="Gambar" />
```

## Elemen

Elemen adalah isi dari tag, isi disini maksudnya teks yang ada diantara tag pembuka dan penutup.

Elemen dapat berisi teks biasa atau tag lainya.

Contoh

```html
<p>
	Saya Elemen dari tag P <br>
	<b>Saya tag b didalam tag p</b>
</p>
```

## Atribut

Atribut adalah informasi tambahan pada tag, informasi tersebut mencakup instruksi, data, dll.

Atribut terdiri dari __name__ dan __value__. Name adalah nama dari atribut dan Value adalah isinya.

Contoh

```html
<a href="https://google.com">Pergi ke google</a>
```

Pada contoh diatas tag `<a>` memiliki sebuah atribut bernama `href` yang memiliki value `https://google.com`.

Tidak semua tag memerlukan atribut. Tapi ada beberapa tag yang membutuhkan atribut wajibnya untuk dapat berjalan dengan baik, seperti tag `img` memerlukan atribut `src`, tag `a` memerlukan atribut `href`.

Dan tidak semua atribut memerlukan value, ada atribut yang bernilai namenya itu sendiri dapat dituliskan tanpa valuenya.

Contoh

```html
<input type="text" disabled="disabled">
<input type="text" disabled>
```

Kedua penulisan diatas benar.

***

Silahkan untuk referensi anda dapat melihat link berikut yang berisi kumpulan tag HTML.

[Kumpulan Tag HTML](https://www.w3schools.com/tags/ref_byfunc.asp)