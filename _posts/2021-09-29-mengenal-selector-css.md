---
layout: post
title: "Mengenal 5 Macam Selector pada CSS"
date: 2021-09-29 08:00:00 +0700
cover: mengenal-selector-css.png
thumb: mengenal-selector-css.png
categories: css
---

[Selector]({{ page.url }}) - Selector adalah pemilih atau pencari elemen pada HTML yang akan diberi style css.

Selector memiliki berbagai macam jenis, disini saya akan membagikan __5 macam selector__ yang sering digunakan pada CSS.

## Universal Selector

Selector ini digunakan untuk memberi style CSS pada seluruh tag html.

Selector ini dibuat dengan tanda bintang (`*`).

Contoh.

```css
* {
	font-family: sans-serif;
	color: blue;
}
```

Kode di atas bermaksud untuk membuat seluruh elemen HTML menggunakan jenis font `sans-serif` dengan warna teks `blue`.

## Tag Selector

Sesuai namanya, *tag selector* digunakan untuk memilih elemen HTML berdasarkan nama tagnya.

Semua tag HTML dapat dijadikan selector.

Contoh.

```css
h1 {
	text-align: center;
}
p {
	font-size: 25px;
}
```

Kode di atas bermaksud untuk membuat teks pada tag `<h1>` menjadi rata tengah, dan ukuran font pada tag `<p>` menjadi `25px`. 

## Class Selector

_Class selector_ digunakan untuk memilih elemen HTML berdasarkan nama *class*-nya.

Nama class yang dimaksud adalah nilai atribut `class` pada tag.

Untuk membuat class selector, kita perlu menambahkan atribut `class` pada tag html yang ditargetkan.

```html
<h1 class="judul"> <!-- Class judul -->
	Judul Judulan
</h1>
<p class="paragraf"> <!-- Class paragraf -->
	Paragraf paragrafan
</p>
<h2 class="judul judul-merah"> <!-- Class judul dan judul-merah -->
	Judul kemerahan
</h2>
```

Kode di atas memiliki 3 tag dengan nilai *class* masing-masing:

* `h1` dengan class `judul`
* `p` dengan class `paragraf`
* `h2` dengan class `judul` dan `judul-merah`

_Class selector_ dibuat dengan **tanda titik** diikuti dengan nama *class*-nya.

Dan berikut kode css-nya.

```css
.judul {
	text-decoration: underline;
}
.judul-merah {
	color: red;
}
.paragraf {
	font-family: sans-serif;
}
```

Selector ini adalah jenis selector yang paling umum digunakan, karena bisa digunakan pada tag apa saja hanya dengan menambahkan atribut class beserta nilainya.

Selain itu sebuah tag juga dapat memiliki lebih dari satu class.

## ID Selector

Selector ini digunakan untuk memilih elemen HTML berdasarkan nama *id*-nya.

Nama *id* yang dimaksud adalah nilai atribut `id` pada tag.

Penulisanya dengan **tanda pagar** (`#`) diikuti dengan nama id-nya.

```html
<h1 id="judul">Judul Unik</h1>
<p id="paragraf">Paragraf Unik</p>
```

```css
#judul {
	color: green;
}
#paragraf {
	font-family: sans-serif;
}
```

Berbeda dengan *class selector*, *id selector* umumnnya hanya digunakan pada satu tag saja, karena `id` pada tag **bersifat unik** atau tidak boleh sama.

Selain itu setiap tag HTML hanya diperbolehkan memiliki satu nilai pada atribut id.

## Atribut Selector

Selector ini digunakan untuk memilih setiap tag dengan atribut yang sesuai.

Penulisanya adalah dengan mengapit nama atribut didalam kurung siku (`[]`).

```css
[checked] {
	display: none;
}

[type="text"] {
	background-color: red;
}
```

Penjelasan.

* Selector pertama `[checked]` memilih semua tag yang memiliki atribut `checked`.
* Selector kedua `[type="text"]` memilih semua tag yang memiliki atribut `type` dengan nilai `text`.

***

## Referensi

Masih banyak jenis selector yang bisa digunakan pada CSS, untuk yang lainya akan saya bahas di postingan selanjutnya.

Atau kunjungi tautan berikut untuk lebih lengkapnya.

<a href="https://www.w3schools.com/css/css_selectors.asp" target="_blank">CSS Selectors</a>