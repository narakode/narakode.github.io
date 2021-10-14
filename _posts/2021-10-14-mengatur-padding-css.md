---
layout: post
title: "Belajar CSS : Mengatur Padding Pada CSS"
date: 2021-10-14 12:00:00 +0700
cover: mengatur-padding-css.png
thumb: mengatur-padding-css.png
categories: css
---

[Padding]({{ page.url }}) - Salah satu properti unuk mengatur jarak elemen pada CSS, adalah  **padding**.

Padding berfungsi untuk mengatur jarak kedalam elemen.

Untuk lebih lengkap, mari kita simak pembahasannya berikut.

## Padding

Padding adalah properti CSS untuk mengatur jarak ke dalam elemen.

Terdapat 4 jenis _padding_ berdasarkan sisinya, yaitu:

-   `padding-top`: Jarak ke atas dalam
-   `padding-right`: Jarak ke kanan dalam
-   `padding-bottom`: Jarak ke bawah dalam
-   `padding-left`: Jarak ke kiri dalam

Untuk nilainya dapat menggunakan satuan ukuran seperti px, rem, %, dll.

Contoh.

```css
p {
  border: 1px solid red;
}
.paragraf-1 {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
.paragraf-2 {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 40px;
}
```

***

![Padding]({{ site.baseurl }}/assets/img/css/padding/padding.png)

***

## Shorthand

Padding memiliki  **shorthand**  untuk menuliskan kode  _padding_  dalam satu baris, yaitu dengan properti  `padding`.

Contoh.

```css
p {
  border: 1px solid red;
}
.paragraf-1 {
  padding: 20px;
}
.paragraf-2 {
  padding: 20px 40px;
}
.paragraf-3 {
  padding: 20px 40px 10px 50px;
}
```

***

![Padding Shorthand]({{ site.baseurl }}/assets/img/css/padding/padding-shorthand.png)

***

Berikut penjelasanya.

-   `padding`  dengan 1 nilai, maka semua sisi padding akan bernilai sama.
-   `padding`  dengan 2 nilai, nilai pertama untuk  `top`  dan  `bottom`, nilai kedua untuk  `right`  dan  `left`.
-   `padding`  dengan 4 nilai, maka nilai pertama untuk  `top`, nilai kedua untuk  `right`, nilai ketiga untuk  `left`, dan nilai keempat untuk  `bottom`.

## Referensi

Silakan kunjungi tautan berikut untuk penjelasan lebih lanjut.

[CSS Padding](https://www.w3schools.com/css/css_padding.asp)
