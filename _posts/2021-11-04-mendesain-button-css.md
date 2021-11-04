---
layout: post
title: "Belajar CSS : Mendesain Button"
date: 2021-11-04 07:00:00 +0700
cover: mendesain-button-css.png
thumb: mendesain-button-css.png
categories: css
---

[Button]({{ page.url }}) - Button adalah elemen berupa __tombol__ pada HTML yang biasanya digunakan untuk melakukan sebuah aksi.

Pada saat mendesain web, button menjadi salah satu elemen yang perlu diperhatikan.

Karena tampilan dasar button kurang menarik, mari kita desain menggunakan properti-properti CSS.

Langsung saja, berikut langkah-langkahnya.

## Membuat Button

Langkah pertama tentu saja buatlah sebuah elemen button pada halaman web.

```html
<button class="tombol">Tombol</button>
```

***

<iframe class="iframe mb-5" width="100%" height="200" src="//jsfiddle.net/ibrahimalanshor/szkvy84m/2/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

***

Disini saya menggunakan atribut class sebagai penanda elemen agar style button dapat digunakan pada **tag lainya**.

## Memberikan Style CSS

Berikan style CSS pada elemen __button__.

```css
.tombol {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #ecf0f1;
  cursor: pointer;
}
```

***

<iframe class="iframe mb-5" width="100%" height="200" src="//jsfiddle.net/ibrahimalanshor/19xfg32s/embedded/result/dark" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

***

## Menambah Variasi Warna

Tambahkan beberapa variasi warna lainya, dengan membuat class warna.

```html
<button class="tombol">Button</button>
<button class="tombol merah">Button</button>
<button class="tombol kuning">Button</button>
<button class="tombol hijau">Button</button>
```

```css
.tombol.merah { background-color: #e74c3c; }
.tombol.kuning { background-color: #f1c40f; }
.tombol.hijau { background-color: #2ecc71; }
```

***

<iframe class="iframe mb-5" width="100%" height="200" src="//jsfiddle.net/ibrahimalanshor/ykf49j0r/embedded/result/dark" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

***

## Menambah Efek Hover

Tambahkan efek hover untuk membuat efek yang menarik pada button.

```css
.tombol:hover { background-color: #2980b9; }
.tombol.merah:hover { background-color: #c0392b; }
.tombol.kuning:hover { background-color: #f39c12; }
.tombol.hijau:hover { background-color: #27ae60; }
```

***

<iframe class="iframe mb-5" width="100%" height="200" src="//jsfiddle.net/ibrahimalanshor/mvp3x9j8/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

***

## Mengubah Ukuran Button

Untuk mengubah ukuran button, ubah nilai properti padding.

```html
<button class="tombol kecil">Button</button>
<button class="tombol merah">Button</button>
<button class="tombol kuning besar">Button</button>
```

```css
.tombol.kecil { padding: 5px 15px; }
.tombol.besar { padding: 15px 25px; }
```

***

<iframe class="iframe mb-5" width="100%" height="200" src="//jsfiddle.net/ibrahimalanshor/8g3Lmdb2/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

***

## Source Code

Anda dapat mengunduh source code pada repository berikut.

<a href="https://github.com/narakode/button" target="_blank">Source Code Button</a>