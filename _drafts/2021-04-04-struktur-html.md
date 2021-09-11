---
layout: post
title: "Belajar HTML : Struktur HTML"
date: 2021-04-04 17:17:00 +0700
cover: struktur-html.png
thumb: struktur-html-thumb.png
categories: html
---

Setelah sebelumnya kita berkenalan dengan HTML, saatnya kita lanjut belajar HTML lagi, yaitu mengenai __Struktur HTML__.

HTML memiliki struktur dasar, yang berguna untuk memudahkan kita dalam membuat sebuah halaman website yang terstuktur.

## Struktur Dasar HTML

Struktur dasar HTML terdiri dari 4 tag utama, yaitu `doctype`, `html`, `head`, dan `body`.

Contoh struktur HTML yang lengkap.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Struktur Dasar HTML</title>
</head>
<body>
	
	<p>
		Struktur Dasar HTML
	</p>

</body>
</html>
```

Silahkan dicoba dan lihat hasilnya.

Apa fungsi dari keempat tag utama tadi? Disini saya akan menjelaskanya satu persatu.

### Doctype

Tag ini merupakan tag paling awal dalam struktur HTML. Tag ini merupakan singkatan dari *Document Type Declaration*, yang berfungsi untuk memberitahukan kepada browser bahwa dockumen yang digunakan dalam halaman ini adalah HTML.

Tag Doctype memiliki perbedaan di masing-masing versi HTML, untuk versi HTML5 seperti yang saya contohkan diatas. Pada versi HTML sebelumnya tag Doctype ini lebih panjang.

### Tag html

Tag kedua pada struktur HTML adalah tag `<html>`.

Tag ini merupakan pembuka dari keseluruhan halaman web tersebut. Semua kode HTML harus dituliskan didalam tag ini.

Tag ini dimulai dengan tag pembuka `<html>` dan tag penutup `</html>`

### Tag head

Tag ketiga pada struktur HTML adalah tag `<head>`.

Pada tag ini berisi data-data atau informasi mengenai halaman web tersebut, seperti judul, deskripsi, css, dan kode-kode lainya yang tidak ditampilkan di browser.

Tag ini dimulai dengan tag pembuka `<head>` dan tag penutup `</head>`

### Tag body

Tag terakhir pada struktur HTML adalah tag `<body>`.

Seperti namanya tag ini merupakan badan dari halaman web. Dimana semua yang akan tampil di browser dituliskan didalam tag ini. Seperti paragraf, gambar, link, dll.

Tag ini dimulai dengan tag pembuka `<body>` dan tag penutup `</body>`

***

Untuk selanjutnya kita akan mempelajari tentang tag, elemen dan atribut pada HTML.