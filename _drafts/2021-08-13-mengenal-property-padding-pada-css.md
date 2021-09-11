---
layout: post
title: "Mengenal Property Padding Pada CSS"
date: 2021-08-13 19:10:00 +0700
cover: mengenal-property-padding-css.png
thumb: mengenal-property-padding-css.png
categories: css
---

Pada postingan sebelumnya kita telah belajar mengenai property margin pada CSS, property tersebut digunakan untuk mengatur jarak keluar dari sebuah elemen.

Kali ini kita akan membahas property yang memiliki fungsi serupa dengan margin yaitu __padding__.

Langsung saja, mari kita bahas property padding tersebut.

## Padding

Padding adalah property yang digunakan untuk mengatur jarak kedalam dari sebuah elemen.

Jarak tersebut dapat diatur di setiap sisinya (atas, bawah, kanan, dan kiri).

* `padding-top`, jarak kedalam atas
* `padding-right`, jarak kedalam kanan
* `padding-bottom`, jarak kedalam bawah
* `padding-left`, jarak kedalam kiri
* `padding`, jarak kedalam semua sisi

Nilai dari property padding dapat berupa px, %, rem, dll.

Berikut contoh penggunaannya.

```css
.kotak1 {
    padding-top: 20px;
}
.kotak2 {
    padding-left: 20px;
}
.kotak3 {
    padding: 20px;
}
```

Hasilnya

![Property Padding]({{ site.baseurl }}/assets/img/padding.png)

## Padding Shorthand

Padding memiliki *shorthand*, agar lebih mudah ringkas dalam menuliskanya.

Berikut contohnya.

```css
.kotak {
    padding: 10px 20px 30px 40px;
}
```

Penjelasan

* `padding-top`: 10px
* `padding-right`: 20px
* `padding-bottom`: 30px
* `padding-left`: 40px

Atau bisa juga hanya berisi dua nilai

```css
.kotak {
    padding: 10px 20px;
}
```

Penjelasan

* `padding-top` dan `padding-bottom` : 10px
* `padding-right` dan `padding-left` : 20px