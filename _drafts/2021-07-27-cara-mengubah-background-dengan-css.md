---
layout: post
title: "Cara Mengubah Background Dengan CSS"
date: 2021-07-27 19:33:00 +0700
cover: mengubah-background-dengan-css.png
thumb: mengubah-background-dengan-css.png
categories: css
---

Background atau latar belakang adalah dasar dari sebuah element.

Dengan memberikan background pada elemen, tampilan elemen tersebut lebih menarik dan bermakna.

Di CSS sendiri, kita dapat mengubah background dengan beberapa *property* yang sudah disediakan.

Property tersebut dapat mengubah background mulai dari warna, gambar, posisi, dll.

Langsung saja, berikut caranya.

## Mengubah Warna Background

Untuk mengubah warna pada background kita dapat menggunakan property `background-color`, dengan disertai nilai warna dari background-nya.

Contoh.

```css
.kotak {
  background-color: red;
}
```

Hasilnya

![Background Color]({{ site.baseurl }}/assets/img/background-color.png)

## Mengubah Background Dengan Gambar

Untuk mengubah background dengan gambar, kita dapat menggunakan property `background-image`, yang nilainya diisi dengan nama file gambarnya.

Syntax.

```css
background-image: url("gambar.png")
```

Contoh.

```css
.kotak1 {
  background-image: url("img/gambar.png")
}
.kotak2 {
  background-image: url("https://picsum.photos/200")
}
```

Hasilnya

![Background Color]({{ site.baseurl }}/assets/img/background-image.png)

## Property Background Repeat

Selanjutnya ada property `background-repeat` yang berfungsi mengatur bagaimana sebuah background berulang secara horizontal maupun vertical.

Hal ini bisa terjadi ketika gambar yang digunakan sebagai background elemen terlalu kecil dari wadahnya, sehingga gambar tersebut mengulang untuk memenuhi ruang yang kosong.

Terdapat 4 nilai yang bisa digunakan dalam property ini, yaitu.

* `repeat`, mengulang secara horizontal & vertikal
* `repeat-x`, mengulang secara horizontal
* `repeat-y`, mengulang secara vertikal
* `no-repeat`, gambar tidak mengulang

Contoh.

```css
.kotak1 {
  background-image: url("img/gambar.png");
  bacground-repeat: repeat-x;
}
.kotak2 {
  background-image: url("https://picsum.photos/200");
  bacground-repeat: repeat-y;
}
```

Hasilnya

![Background Repeat]({{ site.baseurl }}/assets/img/background-repeat.png)


***

Masih ada beberapa property untuk mengatur background lainya, untuk lebih lengkapnya silahkan kunjugi [https://www.w3schools.com/css/css_background.asp](https://www.w3schools.com/css/css_background.asp)