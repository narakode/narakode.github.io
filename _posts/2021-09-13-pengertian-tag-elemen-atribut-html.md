---
layout: post
title: "Pengertian Tag Elemen Dan Atribut Pada HTML"
date: 2021-09-13 13:30:00 +0700
cover: pengertian-tag-elemen-atribut.png
thumb: pengertian-tag-elemen-atribut-thumb.png
categories: html
---

[Tag Elemen Dan Atribut Pada HTML]({{ page.url }}) - Setelah menggenal struktur dasar HTML, lanjut kita ke materi selanjutnya yaitu __tag__, __elemen__, dan __attribut__ pada html.

Yang mana ketiga hal tersebut adalah unsur pembangun utama dalam sebuah dokumen HTML.

Ketiganya merupakan hal dasar pada HTML, maka dari itu, kita harus memahami ketiga hal tersebut.

## Tag

Tag adalah teks khusus yang digunakan untuk menandai fungsi dari dari sebuah konten di dalamnya, apakah sebagai gambar, link, paragraf, dll.

Tag ditulis dengan menuliskan nama tag tersebut yang diapit dengan kurung siku.

Tag terdiri dari __tag pembuka__ dan __tag penutup__, yang mana pada tag penutup diberikan garis miring sebelum kurung situ penutupnya.

Sebagian besar tag HTML memiliki tag pembuka dan penutup, namun ada juga beberapa tag yang tidak memerlukan tag penutupnya.

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

Penulisanya pun bisa dengan menuliskan tag pembukanya saja, atau dengan memberikan garis miring sebelum kurung siku tutup.

Contoh

```html
<input type="text" name="nama" placeholder"Nama">
<img src="gambar.jpg" alt="Gambar" />
```

## Elemen

Elemen adalah isi atau konten dari tag, isi/konten disini maksudnya teks yang ada diantara tag pembuka dan penutup.

Elemen dapat berupa teks biasa atau tag lainya.

Contoh

```html
<p>
	Saya Elemen dari tag P <br>
	<b>Saya tag b didalam tag p</b>
</p>
```

## Atribut

Atribut adalah informasi tambahan pada tag, seperti instruksi, data, dll.

Atribut terdiri dari `name` dan `value`. `name` adalah nama dari atribut dan `value` adalah isinya.

Contoh

```html
<a href="https://google.com">Pergi ke google</a>
```

Pada contoh diatas tag `<a>` memiliki sebuah atribut bernama `href` yang memiliki value `https://google.com`.

Tidak semua tag memerlukan atribut. Tapi ada beberapa tag yang membutuhkan atribut wajibnya untuk dapat berjalan dengan baik, seperti tag `img` memerlukan atribut `src`, tag `a` memerlukan atribut `href`.

Dan tidak semua atribut memerlukan value, ada atribut yang bernilai `name`-nya itu sendiri, yang dituliskan tanpa valuenya.

Contoh

```html
<input type="text" disabled="disabled">
<input type="text" disabled>
```

Kedua penulisan diatas benar.

***

Untuk referensi, anda dapat mengunjungi link berikut yang berisi kumpulan tag HTML.

<a href="https://www.w3schools.com/tags/ref_byfunc.asp" target="_blank">Kumpulan Tag HTML</a>