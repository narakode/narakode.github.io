---
layout: post
title: "Cara Mengubah Background HTML Dengan CSS"
date: 2021-10-05 07:00:00 +0700
cover: mengubah-background-html-css.png
thumb: mengubah-background-html-css.png
categories: css
---

[Mengubah Background HTML]({{ page.url }}) - Background atau latar belakang merupakan salah satu elemen penting dalam __desain web__.

Background berfungsi untuk memberikan visual pada halaman web yang dapat meningkatan kemudahan dan kenyamanan pengunjung.

Dengan CSS kita dapat mengubah atau mengatur background website dengan __warna__ atau __gambar__.

Langsung saja berikut adalah cara mengubah background HTML dengan CSS.

## Mengubah Warna Background

Untuk mengubah warna background, kita dapat menggunakan property `background-color`, yang bernilai nama/kode warnanya.

```css
body {
  background-color: red;
}
```

***

![Background Color]({{ site.baseurl }}/assets/img/css/background/background-color.png)

***

## Mengubah Background Dengan Gambar

Selain dengan warna, kita juga dapat mengubah background dengan gambar, yaitu dengan property `background-image`, yang bernilai url/nama gambarnya.

```css
background-image: url("nama-gambar.jpg");
```

Contoh

```css
body {
  background-image: url("enak.jpg");
}
```

***

![Background Image]({{ site.baseurl }}/assets/img/css/background/background-image.png)

***

Untuk mengatur bagaimana gambar ditampilkan sebagai background, terdapat beberapa property tambahan, antara lain:

### Background Repeat

Jika gambar yang digunakan ukuranya lebih kecil dari lebar elemen, maka gambar tersebut akan ditampilkan secara berulang.

Untuk mengaturnya perulanganya gunakanlah property `background-repeat`.

```css
body {
  background-image: url("enak.jpg");
  background-repeat: no-repeat;
}
```

***

![Background Repeat]({{ site.baseurl }}/assets/img/css/background/background-repeat.png)

***

Nilai yang dapat digunakan:

* `no-repeat`, tidak melakukan perulangan
* `repeat-y`, melakukan perulangan secara vertikal
* `repeat-x`, melakukan perulangan seacara horizontal

### Background Position

Digunakan untuk mengatur posisi gambar background-nya.

Nilai yang dapat digunakan seperti `top`, `bottom`, `left`, `right`, dsb.

```css
body {
  background-image: url("enak.jpg");
  background-repeat: no-repeat;
  background-position: right;
}
```

***

![Background Position]({{ site.baseurl }}/assets/img/css/background/background-position.png)

***

### Background Size

Digunakan untuk mengatur ukuran gambar background-nya.

Nilai yang dapat digunakan seperti `auto`, `cover`, `contain`, `pixel`, `persen`, dsb.


```css
body {
  background-image: url("enak.jpg");
  background-repeat: no-repeat;
  background-size: 300px 200px;
}
```

***

![Background Size]({{ site.baseurl }}/assets/img/css/background/background-size.png)

***

## Referensi

Untuk pembahasan lebih lanjut mengenai penggunaan background pada CSS, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_background.asp" target="_blank">CSS Background</a>