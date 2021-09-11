---
layout: post
title: "Belajar CSS : Apa Itu CSS?"
date: 2021-04-11 13:16:00 +0700
cover: apa-itu-css.png
thumb: apa-itu-css.png
categories: css
---

Dalam pemrograman web, html merupakan kerangka dari halaman website, nah untuk mendesain atau memberikan gaya pada kerangka tersebut menggunakan CSS.

Untuk memulai belajar CSS, mari kita mengenal CSS terlebih dahulu.

## Pengertian CSS

CSS merupakan singkatan dari *Cascading Style Sheet*.

CSS adalah tekhnologi pada pemrograman website yang digunakan untuk mendesain atau memperindah tampilan HTML.

Jadi HTML adalah kerangka dari website den CSS adalah desainnya.

## Contoh CSS

Mari kita lihat perbedaan sebuah halaman website yang saya buat dengan hanya HTML dan dengan HTML dan CSS.

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

Bisa dilihat setelah menambahkan beberapa kode CSS tampilan HTML menjadi berubah.

Setelah ini kita akan lanjut belajar css mengenai lebih lanjut.