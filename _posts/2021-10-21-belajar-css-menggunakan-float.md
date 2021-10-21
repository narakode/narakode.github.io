---
layout: post
title: "Belajar CSS : Menggunakan Properti Float"
date: 2021-10-21 07:00:00 +0700
cover: float-css.png
thumb: float-css.png
categories: css
---

[Float]({{ page.url }}) - Float artinya __melayang__.

Melayang yang dimaksud artinya elemen tersebut berada di __sisi spesifik__ secara horizontal pada elemen induknya.

Langsung saja, mari kita simak penggunaanya berikut.

## Menggunakan Properti Float

Properti Float berfungsi untuk mengatur posisi elemen secara horizontal.

Properti Float memiliki beberapa nilai, antara lain:

* `left`, melayang ke kiri
* `right`, melayang ke kanan
* `none`, tidak melayang (default)

### Contoh Float Left

```html
<img src="gambar.png" />
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
</p>
```

```css
img {
  float: left;
}
```

Hasilnya.

***

![Float Left]({{ site.baseurl }}/assets/img/css/float/left.png)

***

### Contoh Float Right

```html
<img src="gambar.png" />
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
</p>
```

```css
img {
  float: right;
}
```

Hasilnya.

***

![Float Right]({{ site.baseurl }}/assets/img/css/float/right.png)

***

## Kesimpulan

Selain contoh diatas, float juga dapat digunakan untuk mengatur __tata letak elemen__, namun sekarang sudah jarang digunakan.

Untuk mengatur tata letak elemen gunakan properti `flex` atau `grid`.

Untuk lebih lengkapnya, silakan kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_float_examples.asp">CSS Float Examples</a>