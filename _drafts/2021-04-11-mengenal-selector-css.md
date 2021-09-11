---
layout: post
title: "Mengenal 5 Macam Selector pada CSS"
date: 2021-04-11 19:09:00 +0700
cover: mengenal-selector-css.png
thumb: mengenal-selector-css.png
categories: css
---

Selector adalah pemilih atau pencari bagian pada HTML yang akan diberi style css.

Selector memiliki berbagai macam jenis, dan disini saya akan membagikan lima selector yang sering digunakan saja.

## Universal Selector

Selector ini digunakan untuk memberi style css pada setiap tag html.

Selector ini dibuat dengan tanda bintang (`*`).

Contoh.

```css
* {
	font-family: sans-serif;
	color: blue;
}
```

## Tag Selector

Seperti namanya, selector ini digunakan untuk memberi style css pada tag yang dipilih. Semua tag HTML dapat dijadikan selector.

Contoh.

```css
h1 {
	text-align: center;
}
p {
	font-size: 25px;
}
```

Kita juga dapat memilih tag didalam tag sebagai selector. Penulisanya nama tag induk diikuti dengan tag didalamnya.

Contoh.

```html
<p>
	Saya suka <b>Kopi Hitam</b>
</p>
```

Misal saya ingin memberi style css pada tag `b` yang terdapat didalam tag `p`, maka penulisan selector-nya menjadi seperti berikut.

```css
p b {
	text-decoration: underline;
}
```

## Class Selector

Selector ini digunakan untuk memilih tag html yang memiliki artribut class dengan nilai yang sesuai.

Selector ini merupakan yang paling umum digunakan, karena class selector ini bisa digunakan di lebih dari satu tag. Selain itu sebuah tag juga dapat memiliki lebih dari satu class.

Untuk membuat class selector, kita perlu menambahkan atribut class pada tag html yang ditargetkan.

```html
<h1 class="judul">
	Judul Judulan
</h1>
<p class="paragraf">
	Paragraf paragrafan
</p>
<h2 class="judul judul-merah">
	Judul kemerahan
</h2>
```

Disini saya memiliki tag `h1` dengan sebuah class `judul`, lalu tag `p` dengan sebuah class `paragraf`, dan tag `h2` dengan class `judul`, dan `judul-merah`.

Untuk membuat selector ini, penulisanya adalah titik diikuti dengan nama class.

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

## ID Selector

Selector ini memilih tag dengan atribut `id` yang nilainya sesuai sebagai targetnya.

Berbeda dengan *class selector*, *id selector* umumnnya hanya digunakan pada satu tag saja, karena `id` pada tag bersifat unik atau tidak boleh sama.

Penulisanya dengan tanda pagar diikuti dengan nama id-nya.

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

## Atribut Selector

Seperti namanya, selector ini memilih seluruh tag yang memiliki atribut yang sesuai.

Penulisanya adalah dengan mengapit nama atribut didalam kurung siku.

```css
[checked] {
	display: none;
}

[type="text"] {
	background-color: red;
}
```

Penjelasan.

Selector pertama `[checked]` digunakan untuk memilih semua tag yang memiliki atribut `checked`.

Selector kedua `[type="text"]` digunakan untuk memilih semua tag yang memiliki atribut `type` dan ber-value `text`.

***

Masih banyak selector yang bisa digunakan di CSS, untuk yang lainya akan saya bahas di postingan selanjutnya.