---
layout: post
title: "Cara Mengatur Font Dengan CSS"
date: 2021-10-06 19:00:00 +0700
cover: mengatur-font-css.png
thumb: mengatur-font-css.png
categories: css
---

[Font CSS]({{ page.url }}) - Font adalah model atau bentuk karakter huruf atau angka yang dibedakan berdasarkan ukuran, ketebalan dan jenisnya.

Dengan CSS kita dapat mengatur font yang akan digunakan pada halaman web mulai dari jenis, ukuran, gaya, dsb.

Berikut daftar property yang akan dibahas pada postingan kali ini.

* `font-family`, mengatur jenis font
* `font-size`, mengatur ukuran font
* `font-weight`, mengatur ketebalan font
* `font-style`, mengatur gaya font, seperti memiringkan font.

Berikut adalah penjelasanya lebih lengkapnya.

## Mengubah Jenis Font

Property pada CSS yang digunakan untuk mengubah jenis font adalah `font-family` yang diisi nama font-nya.

```css
body {
  font-family: sans-serif;
}
```

***

![Font Family Sans Serif]({{ site.baseurl }}/assets/img/css/font/font-family-sans-serif.png)

***

Font yang dapat digunakan adalah font yang sudah **terinstal** pada komputer.

Selain itu ada juga jenis __font standar__ yang biasanya sudah tersedia pada setiap komputer, yaitu:

* sans-serif
* serif
* monospace
* cursife
* fantasy

Untuk penulisanya, jika nama font mengandung spasi maka dituliskan didalam **tanda kutip**.

Kita juga dapat mencantumkan lebih dari satu font, untuk mengantisipasi jika **font pertama tidak tersedia**. Penulisanya dipisahkan dengan tanda koma.

```css
body {
  font-family: 'Bebas Neue', cursive;
}
```

***

![Font Family Bebas Neue]({{ site.baseurl }}/assets/img/css/font/font-family-bebas-neue.png)

***

## Mengubah Ukuran Font

Untuk mengubah ukuran font, gunakan property `font-size` yang diisi dengan nilai ukuran font-nya.

Satuan nilainya dapat berupa pixel(`px`), persen(`%`), rem, dsb.

```css
h1 {
  font-family: 'Bebas Neue', cursive;
  font-size: 36px;
}
p {
  font-family: sans-serif;
  font-size: 16px;
}
```

***

![Font Size]({{ site.baseurl }}/assets/img/css/font/font-size.png)

***

## Mengatur Ketebalan Font

Untuk mengatur ketebalan font, gunakan property `font-weight` yang diisi nilai ketebalanya.

Nilai yang dapat digunakan:

* `bold`, `bolder`, `lighter`, `normal`.
* Angka `100 - 900`, semakin besar **semakin tebal**.

```css
body {
  font-family: sans-serif;
}
h1 {
  font-weight: normal;
}
p {
  font-weight: 100;
}
```

***

![Font Weight]({{ site.baseurl }}/assets/img/css/font/font-weight.png)

***

## Memiringkan Font

Untuk memiringkan font, kita dapat menggunakan property `font-style` dengan nilai `italic` atau `oblique`.

```css
h1 {
  font-style: italic;
}
```

***

![Font Style]({{ site.baseurl }}/assets/img/css/font/font-style.png)

***

Untuk mengembalikan font ke bentuk normal, gunakan nilai `normal` pada property `font-style`.

## Referensi

Untuk penjelasan lebih lengkap mengenai cara mengatur font dengan css, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_font.asp" target="_blank">CSS Font</a>