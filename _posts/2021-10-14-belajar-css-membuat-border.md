---
layout: post
title: "Belajar CSS : Membuat Garis Tepi (Border)"
date: 2021-10-12 09:00:00 +0700
cover: belajar-css-membuat-border.png
thumb: belajar-css-membuat-border.png
categories: css
---

[Border]({{ page.url }}) - Garis tepi (border) adalah garis yang mengelilingi atau garis yang berada di tepi elemen.

Border adalah salah satu elemen desain yang cukup sering digunakan.

Langsung saja berikut cara membuat garis tepi (border) pada CSS.

## Cara Membuat Border

Ada empat properti untuk membuat border pada CSS yaitu:

* `border-style`: Jenis border
* `border-width`: Ukuran ketebalan border
* `border-color`: Warna border
* `border`: *shorthand* atau penulisan singkat

Berikut adalah penjelasanya masing-masing.

### border-style (Jenis Border)

Properti `border-style` digunakan untuk mengatur jenis border.

Terdapat beberapa nilai yang dapat digunakan pada properti ini, antara lain:

* `solid`, jenis border garis lurus
* `dashed`, jenis border garis putus-putus
* `dotted`, jenis border titik-titk
* `double`, jenis border dobel atau dua garis
* dsb

Contoh.

```html
<p class="border-1">Border 1</p>
<p class="border-2">Border 2</p>
<p class="border-3">Border 3</p>
<p class="border-4">Border 4</p>
```

```css
.border-1 {
  border-style: solid;
}
.border-2 {
  border-style: dashed;
}
.border-3 {
  border-style: dotted;
}
.border-4 {
  border-style: double;
}
```

Hasilnya.

***

![Border Style]({{ site.baseurl }}/assets/img/css/border/border-style.png)

***

### border-width (Ketebalan Border)

Properti `border-width` digunakan untuk mengatur ukuran ketebalan border.

Nilainya dapat berupa px, persen, rem, dll.

Contoh.

```html
<p class="border-1">Border 1</p>
<p class="border-2">Border 2</p>
<p class="border-3">Border 3</p>
<p class="border-4">Border 4</p>
```

```css
.border-1 {
  border-style: solid;
  border-width: 1px;
}
.border-2 {
  border-style: dashed;
  border-width: 5px;
}
.border-3 {
  border-style: dotted;
  border-width: 10px;
}
.border-4 {
  border-style: double;
  border-width: 15px;
}
```

Hasilnya.

***

![Border Width]({{ site.baseurl }}/assets/img/css/border/border-width.png)

***

### border-color (Warna Border)

Properti `border-color` digunakan untuk mengatur warna border.

Nilainya dapat berupa nama warna, rgb, dll.

Contoh.

```html
<p class="border-1">Border 1</p>
<p class="border-2">Border 2</p>
<p class="border-3">Border 3</p>
<p class="border-4">Border 4</p>
```

```css
.border-1 {
  border-style: solid;
  border-width: 5px;
  border-color: red;
}
.border-2 {
  border-style: dashed;
  border-width: 5px;
  border-color: green;
}
.border-3 {
  border-style: dotted;
  border-width: 5px;
  border-color: brown;
}
.border-4 {
  border-style: double;
  border-width: 5px;
  border-color: blue;
}
```

Hasilnya.

***

![Border Color]({{ site.baseurl }}/assets/img/css/border/border-color.png)

***

### border (Shorthand)

*Shorthand* pada CSS artinya __penulisan singkat__. Yang berguna untuk menuliskan properti-properti di atas dalam satu baris kode.

Berikut _syntax_-nya.

```css
border: border-width border-style border-color;
```

Contoh.

```html
<p>Border Shorthand untuk penulisan singkat border</p>
```

```css
p {
  border: 3px solid red;
}
```

***

![Border Shorthand]({{ site.baseurl }}/assets/img/css/border/border-shorthand.png)

***

## Menentukan Sisi Border

Pada contoh di atas, border digunakan pada setiap sisi elemen. Anda juga dapat mengatur secara spesifik sisi yang akan diberikan border.

Terdapat 4 sisi pada CSS, yaitu:

* `border-top`: atas
* `border-right`: kanan
* `border-bottom`: bawah
* `border-left`: kiri

Contoh.

```html
<p class="border-1">Border 1</p>
<p class="border-2">Border 2</p>
<p class="border-3">Border 3</p>
<p class="border-4">Border 4</p>
```

```css
.border-1 {
  border-top: 3px solid red;
}
.border-2 {
  border-right: 4px dotted blue;
}
.border-3 {
  border-bottom: 5px dashed brown;
}
.border-4 {
  border-left: 10px double green;
}
```

***

![Border Side]({{ site.baseurl }}/assets/img/css/border/border-side.png)

***

## Referensi

Untuk penjelasan lebih lengkap, anda dapat mengunjungi tautan berikut:

<a href="https://www.w3schools.com/css/css_border.asp" target="_blank">CSS Border</a>