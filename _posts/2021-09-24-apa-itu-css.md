---
layout: post
title: "Belajar CSS : Apa Itu CSS?"
date: 2021-09-24 08:00:00 +0700
cover: apa-itu-css.png
thumb: apa-itu-css.png
categories: css
---

[Apa itu CSS]({{ page.url }}) - Pada halaman web, HTML adalah kerangka dari halaman website, nah untuk mendesain atau memberikan gaya pada kerangka tersebut menggunakan teknologi bernama CSS.

Tanpa adanya CSS, halaman website akan terlihat *monoton*. Maka dari itu penting bagi kita yang sedang belajar pemrograman web untuk mempelajari CSS.

Untuk memulai belajar CSS, mari kita mengenal CSS terlebih dahulu.

## Pengertian CSS

CSS merupakan singkatan dari *Cascading Style Sheet*.

CSS adalah teknologi pada pemrograman website yang digunakan untuk __mendesain__ atau memperindah tampilan HTML.

## Fungsi CSS

Selain sebagai alat untuk mendesain tampilan web, CSS juga memiliki fungsi lain seperti berikut:

* Mendesain tampilan web
* Mengatur tata letak web
* Membuat animasi pada halaman web
* dll.

## Contoh CSS

Mari kita lihat perbedaan sebuah halaman website yang dibuat dengan CSS dan tanpa CSS.

### Hanya HTML

Berikut adalah tampilan dari sebuah website hanya dengan HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Apa Itu CSS</title>
</head>
<body>
  
  <h1>Apa Itu CSS</h1>
  <p>
  	CSS merupakan singkatan dari Cascading Style Sheet.
  </p>

</body>
</html>
```

***

![Website Dengan HTML]({{ site.baseurl }}/assets/img/web-dengan-html.png)

***

### Dengan CSS

Berikut adalah tampilan dari sebuah website dengan HTML dan CSS.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Apa Itu CSS</title>

  <style>
  	body {
  		font-family: sans-serif;
  		text-align: center;
  	}
  	h1 {
  		color: blue;
  	}
  </style>
</head>
<body>
  
  <h1>Apa Itu CSS</h1>
  <p>
  	CSS merupakan singkatan dari Cascading Style Sheet.
  </p>

</body>
</html>

```

***

![Website Dengan HTML dan CSS]({{ site.baseurl }}/assets/img/website-dengan-css.png)

***

Bisa dilihat, setelah menambahkan beberapa kode CSS tampilan HTML menjadi berubah, mulai dari tata letaknya, warnanya, dan jenis font-nya.

## Kesimpulan

Masih banyak hal yang bisa dilakukan dengan css, seperti yang dijelaskan pada fungsi CSS diatas.

Untuk itu mari kita akan lanjut belajar css pada postingan berikutnya.