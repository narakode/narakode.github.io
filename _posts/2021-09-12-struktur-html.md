---
layout: post
title: "Belajar HTML : Struktur HTML"
date: 2021-09-12 07:40:00 +0700
cover: struktur-html.png
thumb: struktur-html-thumb.png
categories: html
---

[Struktur HTML]({{ page.url }}) - Setelah sebelumnya kita berkenalan dengan HTML, saatnya kita lanjut ke materi selanjutnya, yaitu mengenai __Struktur HTML__.

HTML memiliki struktur dasar, yang berguna untuk memudahkan kita dalam membuat sebuah halaman website yang terstruktur.

Dengan membuat halaman web yang terstruktur, pengalaman pengunjung di website kita menjadi lebih baik. Di mata mesin pencari, website yang terstuktur juga memiliki nilai lebih yang dapat meningkatkan kualitas web pada mesin pencari. 

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

Tag ini adalah tag paling awal dalam __struktur HTML__. Tag ini merupakan singkatan dari *Document Type Declaration*, yang berfungsi untuk memberitahukan kepada browser bahwa dockumen yang digunakan dalam halaman ini adalah HTML.

Tag `Doctype` memiliki perbedaan di masing-masing versi HTML, untuk versi HTML5 seperti yang saya contohkan diatas. Pada versi HTML sebelum-sebelumnya tag `Doctype` ini memiliki *syntax* yang lebih panjang.

### Tag html

Tag kedua pada struktur HTML adalah tag `<html>`.

Tag ini adalah tag pembuka dari keseluruhan halaman web tersebut. Semua kode HTML harus dituliskan didalam tag ini.

Tag ini dimulai dengan tag pembuka `<html>` dan tag penutup `</html>`

### Tag head

Tag ketiga pada struktur HTML adalah tag `<head>`.

Pada tag ini, berisi data-data atau informasi mengenai halaman web tersebut, seperti judul, deskripsi, css, dan kode-kode lainya yang tidak ditampilkan di browser.

Tag ini dimulai dengan tag pembuka `<head>` dan tag penutup `</head>`

### Tag body

Tag terakhir pada struktur HTML adalah tag `<body>`.

Seperti namanya tag ini adalah badan dari halaman web. Dimana semua yang akan tampil di browser dituliskan didalam tag ini. Seperti paragraf, gambar, link, dll.

Tag ini dimulai dengan tag pembuka `<body>` dan tag penutup `</body>`

***

Untuk selanjutnya kita akan mempelajari tentang tag, elemen dan atribut pada HTML.