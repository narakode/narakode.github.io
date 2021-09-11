---
layout: post
title: "Mengenal Property Margin Pada CSS"
date: 2021-08-09 22:10:00 +0700
cover: mengenal-property-margin-css.png
thumb: mengenal-property-margin-css.png
categories: css
---

Dalam mendesain sebuah halaman website, terkadang kita memerlukan jarak antar elemen. Jarak tersebut berfungsi agar elemen-elemen tersebut dapat tersusun rapih.

Pada css terdapat dua jenis jarak, __margin__ dan __padding__.

Pada kali ini kita akan membahas mengenai margin.

## Margin

Margin adalah property yang digunakan untuk mengatur jarak keluar dari elemen, atau mengatur jarak antar elemen.

Jarak tersebut dapat kita atur sisi mananya secara spesifik. Mulai dari sisi atas, bawah, kanan, dan kiri.

* `margin-top`, mengatur jarak keluar atas
* `margin-right`, mengatur jarak keluar kanan
* `margin-left`, mengatur jarak keluar kiri
* `margin-bottom`, mengatur jarak keluar bawah
* `margin`, mengatur jarak semua sisi

Setiap margin dapat diisi dengan nilai satuan ukuran seperti px, rem, %, dll.

Contoh disini terdapat tiga kotak yang belum memiliki jarak.

![Dua Kotak]({{ site.baseurl }}/assets/img/margin.png)

Kemudian kotak pertama saya berikan jarak kebawah dengan `margin-bottom`, kotak kedua saya berikan jarak kekiri dengan `margin-left`, dan kotak ketiga saya berikan jarak pada setiap sisinya.

```css
.kotak1 {
    margin-bottom: 30px;
}
.kotak2 {
    margin-bottom: 50px;
}
.kotak3 {
    margin: 20px;
}
```

Hasilnya 

![Margin]({{ site.baseurl }}/assets/img/margin-property.png)

## Shorthand

Selain dengan mengatur masing-masing jarak sisi elemen, kita juga dapat mengatur jarak semua sisi elemen secara sekaligus dengan *shorthand* property.

Contoh

```css
.kotak {
    margin: 10px 20px 10px 20px;
}
```

Penjelasan

* `margin-top`: 10px
* `margin-right`: 20px
* `margin-bottom`: 10px
* `margin-left`: 10px

Atau juga bisa dengan hanya dua nilai, contoh

```css
.kotak {
    margin: 10px 20px;
}
```

Penjelasan

* `margin-top` & `margin-bottom`: 10px
* `margin-right` & `margin-left`: 20px

***

Untuk referensi lebih lengkap, bisa dilihat di halaman berikut

[https://www.w3schools.com/css/css_margin.asp](https://www.w3schools.com/css/css_margin.asp)